import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import NavBar from "./Views/Navbar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateGame from "./Views/Forms/CreateGame";
import Upper from "./Views/Upper/Upper";
import Detail from "./Views/Detail/Detail";
import DetailNewGame from "./Views/Detail/DetailNewGame";
import ContactForm from "./Views/Forms/ContactForm";
import MenuFilterVertical from "./Views/MenuFilterVertical/MenuFilterVertical";

function App() {
  const location = useLocation();
  let [games, setGames] = useState([]);

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

      {location.pathname !== "/" && <NavBar />}
    </div>
  );
}

export default App;
