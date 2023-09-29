import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";



function Card({game}) {
  
   const { id, name, image, rating } = game;
   const navigate = useNavigate();
   
    function navigateHandler() {
       navigate(`/detail/${id}`);
    }

       
   return(
     <Link to={`/detail/${id}`} className={`card ${styles.card}`}>

      <div id={styles.card}>
        <img onClick={navigateHandler} src={image} alt={name} className={styles.imgCard} />
        <h3 className={styles.name}onClick={navigateHandler}> {name}</h3>
        <button value={Math.round(rating)} className={styles.rating}> {rating} ★ </button>
      </div>     
     </Link>
  )
}



export default Card; 

         
         
