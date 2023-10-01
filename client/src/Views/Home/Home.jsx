import React, { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import Cards from '../../components/Cards/Cards';
import { useSelector } from 'react-redux';

const Home = (searchValue) => {
  const [userName, setUserName] = useState('');
  const games = useSelector((state) => state.games);
// los filtro para eliminar esos juegos "basura" que me estan apareciendo
  const filteredGames = games.filter((game) => !/(object|Object)s?\b/i.test(game.name));
  
// obtiene el nombre para el saludo personalizado
  useEffect(() => {
    // Obtener el nombre del localStorage o de un estado global si es necesario
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);


  const areGamesAvailable = games.length > 0;

  return (
    <div className={styles.general}>
        <div className={styles.Bienvenida}>
      <h2>Welcome {userName} !  
      <p>Search for your favorite video game, or create your own!</p>
      </h2>
      </div>
      {areGamesAvailable && (
      <div className={styles.CardsContainer}>
        <Cards games={filteredGames} searchValue={searchValue} />
      </div>
      )}
    <div className={styles.container}>
     
    </div> 
  </div> 
  );
};

export default Home;
