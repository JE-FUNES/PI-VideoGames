import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {



    // para que aparezca el navbar despues de 2 segundos

        const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
          // Cambia la visibilidad después de un tiempo determinado (por ejemplo, 2 segundos)
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 2000);
      
          return () => {
            clearTimeout(timer); // Limpia el temporizador al desmontar el componente
          };
        }, []);

        const divStyles = {
            opacity: isVisible ? 1 : 0, // Cambia la opacidad en función de isVisible
            transition: 'opacity 1s', // Transición suave durante 1 segundo
          };

    

     return (
        <div className={styles.contenedor}>
        <nav style={divStyles}>
            <ul>
                <li></li>
                <li></li>
                <li><SearchBar className={styles.searchBar}/></li>
                <li>
                    <Link to="/home">
                        <button className={styles.boton}>Find by Gender</button>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <button className={styles.boton}>Find by Platform</button>
                    </Link>
                </li>
                <li>
                    <Link to="/creategame">
                        <button className={styles.boton}>Create your Game</button>
                    </Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                    <Link to="/home">
                        <button className={styles.home}></button>
                    </Link>
                </li>
                <li>
                    <Link to="/email o formulario">
                        <button className={styles.contact}></button>
                    </Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                    <Link to="https://wa.me/5493512737199">
                        <button className={styles.whapp}></button>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/je-funes">
                        <button className={styles.linkedin}></button>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.github.com/JE-FUNES">
                        <button className={styles.github}></button>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/je.funes">
                        <button className={styles.instagram}></button>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/juliafunes.vinilomall">
                        <button className={styles.face}></button>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )};
                
                

    
 
     
     
     
     export default NavBar; 