import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import NavBar from "./Views/Navbar/NavBar";
import { Route, Routes, useLocation } from 'react-router-dom';
import Detail from "./Views/Detail/Detail";
import Home from "./Views/Home/Home";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateGame from "./Views/Forms/CreateGame";
import UpdateGame from "./Views/Forms/UpdateGame";
import Upper from "./Views/Upper/Upper";


function App() {

  const location = useLocation();
  let [games, setGames] = useState([]);


  useEffect(() => {
    const navBar = document.querySelector(`.${styles.navBar}`);
    if (navBar) {
      navBar.classList.add('slide');
    }
  }, []);
       

  return (
    <div className="App">
      {location.pathname !== '/' && <Upper />}
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home games={games}/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/creategame" element={<CreateGame/>} />
        <Route path="/updategame/:id" element={<UpdateGame />} />
      </Routes>
    </div>
  );
  }  


export default App;
