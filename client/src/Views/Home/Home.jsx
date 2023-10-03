
import styles from "./Home.module.css";
import Cards from '../../components/Cards/Cards';
import { useSelector } from 'react-redux';

const Home = (searchValue) => {
  
  const games = useSelector((state) => state.games);
// los filtro para eliminar esos juegos "basura" que me estan apareciendo
  const filteredGames = games.filter((game) => !/(object|Object)s?\b/i.test(game.name));
  
  const areGamesAvailable = games.length > 0;

  return (
    <div className={styles.routeContainer}>
     
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
