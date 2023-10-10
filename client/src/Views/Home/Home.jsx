import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const games = useSelector((state) => state.gamesCopy);
  const areGamesAvailable = games.length > 0;

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.routeContainer}>
      {areGamesAvailable && (
        <div className={styles.CardsContainer}>
          <Cards
            games={games}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            gamesPerPage={gamesPerPage}
            indexOfFirstGame={indexOfFirstGame}
            indexOfLastGame={indexOfLastGame}
            paginate={paginate}
          />
        </div>
      )}
      <div className={styles.container}></div>
    </div>
  );
};

export default Home;
