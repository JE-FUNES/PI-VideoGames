import React from "react";
import { Link } from "react-router-dom";
import { platforms } from "../Platforms";
import styles from "./Card.module.css";



function Card({games}) {
   const { id, name, image, rating, parent_platforms, genres } = games;
   


   
   return(
      <div id={styles.card}>
          <Link to={ `/detail/${ id }` } className={styles.linkDetails}>
              <div className={styles.imgCard}>
                  <img className={styles.img} src={ image } alt={ name } />
              </div>
          </Link>
          <div className={styles.cardInfo}>
              <section className={styles.cardClose}>
                  <button value={Math.round(rating)} className={styles.rating}> { rating } </button>
                  <section className={styles.platform}>
                      { platforms( parent_platforms ) }
                  </section>
                      <h1 className={styles.name}> { name } </h1>
              </section>
              <section className={styles.cardOpen}>
                  <p className={styles.cardGenres}> 
                      { genres.map(genre => genre.name).join(', ') } 
                  </p>
              </section>
          </div>
      </div>
  )
}



export default Card; 

         
         
