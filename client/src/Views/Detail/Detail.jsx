import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetails } from "../../redux/actions";
import { useSelector } from "react-redux";
import styles from "./Detail.module.css";
import android from "../../Images/Platforms/android.png";
import nintendo from "../../Images/Platforms/nintendo.png";
import pc from "../../Images/Platforms/pc.png";
import playstation from "../../Images/Platforms/playstation.png";
import xbox from "../../Images/Platforms/xbox.png";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetails = useSelector((state) => state.detailGame);

  React.useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  if (!gameDetails) {
    return <div className={styles.Loading}>Loading...</div>;
  }

  const {
    name,
    description,
    released,
    updated,
    rating,
    platforms,
    genres,
    stores,
    image,
  } = gameDetails;

  return (
    <div className={styles.routeContainer}>
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.Detail}>
        <h1>{name}</h1>
        <p># {id}</p>
        <p>{description}</p>
      </div>

      <div className={styles.Detail2}>
        <h4>
          More about <br />
          {name}:
        </h4>
        <p className={styles.pDetail2}>Released: {released}</p>
        <p className={styles.pDetail2}>Updated: {updated}</p>
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

        <h3>Genders:</h3>
        <ul>
          <li>{genres ? genres.join(" | ") : "No genres available"}</li>
        </ul>
        <h3>Stores:</h3>
        <ul>
          <li>{stores ? stores.join(" | ") : "No stores available"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
