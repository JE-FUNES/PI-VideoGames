import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,  useEffect } from "react";
import styles from "./Detail.module.css";


const Detail = () => {

    const {id} = useParams();
    const [game, setGame] = useState({});
    useEffect(() => {
        axios(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setGame(data);
           } else {
              window.alert('No hay videos con ese ID');
           }
        });
        return setGame({});
     }, [id]);


    return (
        <div className={styles.contenedorGral}>
            <h1>✨{game.name}✨
           
            </h1>
            <div className={styles.contenedorTarjetaImagen}>
                <div className={styles.contenedorTarjeta}>
                    <div className={styles.tarjeta}>
                       <div className={styles.contenedorTexto}>
                            <ul>
                                <li><h3>Release Date 👉 {game.released}</h3></li>
                                <li><h3>Rating 👉 {game.rating}</h3></li>
                                <li><h3>Gender 👉 {game.genres}</h3></li>
                                <li><h3>Platforms 👉 {game.platforms}</h3></li> 
                                <li><h3>Description 👉 {game.description}</h3></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.contenedorImagen}>
                    <img src={game.image} alt={game.name} />
                </div>
            </div>
        </div>
    )};

    
 
     
     
     
     export default Detail; 