import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import Pagination from "../Pagination/Pagination";
import Loader from "../../Views/Loader/Loader";

function Cards({
  currentPage,
  setCurrentPage,
  gamesPerPage,
  indexOfFirstGame,
  indexOfLastGame,
}) {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.gamesCopy);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  // //                  Paginado
  // Devuelve una copia de una parte de los datos guardados en el estado
  const currentGame = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  // Cards
  const cards = () => {
    return currentGame?.map((element) => (
      <Card game={element} key={element.id} />
    ));
  };

  return (
    <div className={styles.Cards_component}>
      <div className={styles.Cards}>
        {games.includes("Not found") ? (
          <div className="notFoundGames"> {games} </div>
        ) : games.length !== 0 ? (
          cards()
        ) : (
          <Loader />
        )}
      </div>
      <Pagination
        gamesPerPage={gamesPerPage}
        totalPosts={Array.isArray(games) ? games.length : 0}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Cards;

// modfi borrar
