import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import NavBar from "./Views/Navbar/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Views/Home/Home";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateGame from "./Views/Forms/CreateGame";
import Upper from "./Views/Upper/Upper";
import Detail from "./Views/Detail/Detail";
import DetailNewGame from "./Views/Detail/DetailNewGame";
import ContactForm from "./Views/Forms/ContactForm";
import MenuFilterVertical from "./Views/MenuFilterVertical/MenuFilterVertical";
import PlayZuma from "./Views/PlayZuma/PlayZuma";
import PrivateLogin from "./Views/LandingPage/PrivateLogin";
import ListadoContactos from "./Views/ListadoContactos/ListadoContactos";
import axios from "axios";

function App() {
  const location = useLocation();
  let [games, setGames] = useState([]);

  let [access, setAccess] = useState(false);
   const navigate = useNavigate();

   
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/private/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/listadoContactos');
      });
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function logOut() {
      setAccess(false);
      navigate('/');
   }

  useEffect(() => {
    const navBar = document.querySelector(`.${styles.navBar}`);
    if (navBar) {
      navBar.classList.add("slide");
    }
  }, []);

  return (
    <div className={styles.App}>
      {location.pathname !== "/" && <Upper />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatelogin" element={<PrivateLogin login={login} />} />
        <Route path="/listadocontactos" element={<ListadoContactos logOut={logOut} />} />
        <Route path="/zuma" element={<PlayZuma />} />
        <Route
          path="/home"
          element={
            <div className={styles.container}>
              {" "}
              <MenuFilterVertical /> <Home games={games} />
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detailnewgame/:id" element={<DetailNewGame />} />
        <Route path="/creategame" element={<CreateGame />} />
        <Route path="/contactus" element={<ContactForm />} />
      </Routes>

      {location.pathname !== "/" && location.pathname !== "/listadoContactos" && location.pathname !== "/privatelogin" && <NavBar />}

    </div>
  );
}

export default App;
