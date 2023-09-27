import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import NavBar from "./Views/Navbar/NavBar";
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import Detail from "./Views/Detail/Detail";
import Home from "./Views/Home/Home";
import LandingPage from "./Views/LandingPage/LandingPage";
import CreateGame from "./Views/Forms/CreateGame";
import UpdateGame from "./Views/Forms/UpdateGame";
import Footer from "./Views/Footer/Footer";


/*import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';
*/

function App() {
  const location = useLocation();
  let [games, setGames] = useState([]);

  useEffect(() => {
    const navBar = document.querySelector(`.${styles.navBar}`);
    if (navBar) {
      navBar.classList.add('slide');
    }
  }, []);

  function onSearch(name) {
    try {
      axios.get(`http://localhost:3001/games/?name=${name}`)
        .then(({ data }) => {
          // Verificar si se encontraron juegos en la búsqueda
          if (data.length === 0) {
            window.alert('Game not found');
          } else {
            // Verificar si el juego ya existe en la lista de juegos
            const existingGame = data.find((game) => game.name === name);
            if (existingGame) {
              window.alert('Game already exists');
            } else {
              // Agregar los juegos encontrados a la lista de juegos
              setGames((oldGames) => [...oldGames, ...data]);
            }
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          // Puedes manejar el error aquí, como mostrar una alerta de error
          window.alert('An error occurred while searching for games');
        });
    } catch (error) {
      console.error('Error:', error);
      // Puedes manejar el error aquí, como mostrar una alerta de error
      window.alert('An error occurred while searching for games');
    }
  }
  
             

  function onClose(id) {
    const filteredGames = games.filter(
       (game) => game.id !== Number(id));
       
    setGames(filteredGames);
    }


  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar
      className="nav"
      onSearch={onSearch}  
      />}
      {location.pathname !== '/' && <Footer />}
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home' element={<Cards games={games} onClose={onClose} />} />
      <Route path='/detail/:id' element={< Detail />} />
      <Route path='/creategame' element={ <CreateGame />} />
      <Route path='/updategame/:id' element={<UpdateGame />} />
      </Routes>
    </div>
  );
}


export default App;
