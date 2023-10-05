
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Cards from '../../components/Cards/Cards';
import { getGames } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';

const Home = (searchValue) => {
  
  const games = useSelector((state) => state.gamesCopy);
// los filtro para eliminar esos juegos "basura" que me estan apareciendo
  //const filteredGames = games.filter((game) => !/(object|Object)s?\b/i.test(game.name));

  const dispatch = useDispatch();

  useEffect(() => {
    // Llama a la acción getGames al cargar el componente
    dispatch(getGames());
  }, [dispatch]);
  
  const areGamesAvailable = games.length > 0;


    //                  Paginado
    //  Estados
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ gamesPerPage ] = useState( 15 );
    
    // Index del ultimo juego que se ve en la pagina → pag1 => 15 || pag2 => 30
    const indexOfLastGame = currentPage * gamesPerPage;
    
    // Index del primer juego que se ve en la pagina → pag1 => 0 || pag2 => 15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;



  return (
    <div className={styles.routeContainer}>
     
     
      {areGamesAvailable && (
      <div className={styles.CardsContainer}>
        <Cards 
        games={games} 
        searchValue={searchValue}
        currentPage={ currentPage } 
        setCurrentPage={ setCurrentPage } 
        gamesPerPage={ gamesPerPage } 
        indexOfFirstGame={ indexOfFirstGame } 
        indexOfLastGame={ indexOfLastGame }  
        />
      </div>
      )}
    <div className={styles.container}>
     
    </div> 
  </div> 
  );
};

export default Home;
