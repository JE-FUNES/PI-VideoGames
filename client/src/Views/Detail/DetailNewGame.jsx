import React, { useEffect } from "react";
import { getDetailsByUUID } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DetailNewGame.module.css";
import android from "../../Images/Platforms/android.png";
import nintendo from "../../Images/Platforms/nintendo.png";
import pc from "../../Images/Platforms/pc.png";
import playstation from "../../Images/Platforms/playstation.png";
import xbox from "../../Images/Platforms/xbox.png";

const DetailNewGame = () => {
  const { id } = useParams();
  const gameDetails = useSelector((state) => state.detailNewGame);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsByUUID(id)).then((result) =>
      console.log("Resultado de la action getDetailsByUUID:", result)
    );
  }, [dispatch, id]);

  useEffect(() => {}, [gameDetails]); 

  if (!gameDetails) {
    return <div className={styles.Loading}>Loading...</div>;
  }

  const { name, description, released, rating, platforms, genres, image } =
    gameDetails;

  return (
    <div className={styles.routeContainer}>
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.Detail}>
        <h1>{name}</h1>
        <p># {id}</p>
        <p>{description}</p>
      </div>

      <div className={styles.Detail2}>
        <h4>More about {name}:</h4>
        <p className={styles.pDetail2}>Released: {released}</p>
        <p className={styles.pDetail2}>Rating: {rating}</p>

        <div className={styles.platforms}>
          <h3>Platforms:</h3>
          <img
            src={playstation}
            alt="playstation"
            className={styles.LogoPlatform}
          />
          <img src={xbox} alt="xbox" className={styles.LogoPlatform} />
          <img src={nintendo} alt="nintendo" className={styles.LogoPlatform} />
          <img src={android} alt="android" className={styles.LogoPlatform} />
          <img src={pc} alt="pc" className={styles.LogoPlatform} />

          <ul>
            <li>
              {platforms ? platforms.join(" | ") : "No platforms available"}
            </li>
          </ul>
        </div>

        <h3>Genres:</h3>
        <ul>
          <li>{genres ? genres.join(" | ") : "No genres available"}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailNewGame;
