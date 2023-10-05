import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";



function Card({game}) {
  
   const { id, name, image, rating, genres } = game;
   const navigate = useNavigate();

   // hacer un condicional. Si el id del videogame tiene formato UUID entonces navugate llevará a /detailNewGame/id
   // caso contrario, llevará a /detail/id
    const navigateHandler = () => {
        if (id.length === 36) {
          navigate(`/detailNewGame/${id}`);
        } else {
          navigate(`/detail/${id}`);
        }
    };

       
   return(
     

      <div id={styles.card}>
        <img onClick={navigateHandler} src={image} alt={name} className={styles.imgCard} />
        <h3 className={styles.name}onClick={navigateHandler}> {name}</h3>
        <p className={styles.genre}>
          {genres.length > 0
          ? `Genres: ${genres.slice(0, 3).map(genre => genre.name).join(" | ")}${
            genres.length > 3 ? ' ...' : ''
          }`
        : 'No genres available'}
        </p>

        <button value={Math.round(rating)} className={styles.rating}> {rating} ★ </button>
      </div>     
     
  )
}



export default Card; 

         
         
