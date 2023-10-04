import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {

  
  // palabras onMouseHover del menu
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHoveredW, setIsHoveredW] = useState(false);
  const [isHoveredL, setIsHoveredL] = useState(false);
  const [isHoveredG, setIsHoveredG] = useState(false);
  const [isHoveredI, setIsHoveredI] = useState(false);
  const [isHoveredF, setIsHoveredF] = useState(false);
  
  // para que aparezca el navbar despues de 2 segundos
  
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



          const showMessage = () => {
            setIsHovered(true);
          };
        
          const hideMessage = () => {
            setIsHovered(false);
          };

          const showMessage1 = () => {
            setIsHovered1(true);
          };
        
          const hideMessage1 = () => {
            setIsHovered1(false);
          };

          const showMessageW = () => {
            setIsHoveredW(true);
          };
        
          const hideMessageW = () => {
            setIsHoveredW(false);
          };

          const showMessageL = () => {
            setIsHoveredL(true);
          };
        
          const hideMessageL = () => {
            setIsHoveredL(false);
          };

          const showMessageG = () => {
            setIsHoveredG(true);
          };
        
          const hideMessageG = () => {
            setIsHoveredG(false);
          };

          const showMessageI = () => {
            setIsHoveredI(true);
          };
        
          const hideMessageI = () => {
            setIsHoveredI(false);
          };

          const showMessageF = () => {
            setIsHoveredF(true);
          };
        
          const hideMessageF = () => {
            setIsHoveredF(false);
          };

     return (
        <div className={styles.navbar}>
        <nav style={divStyles}>
            <ul>
                <li></li>
                <li className={styles.searchBar}>
                  <SearchBar/>
                </li>
                <li></li>
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
                        <button 
                        className={styles.home} 
                        onMouseOver={showMessage}
                        onMouseOut={hideMessage}>
                        </button>
                        {isHovered && <div className={styles.mensaje}>Home</div>}
                    </Link>
                </li>
                <li>
                    <Link to="/email o formulario">
                        <button 
                        className={styles.contact}
                        onMouseOver={showMessage1}
                        onMouseOut={hideMessage1}>
                        </button>
                        {isHovered1 && <div className={styles.mensaje1}>Contact</div>}
                    </Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                    <Link to="https://wa.me/5493512737199">
                        <button 
                        className={styles.whapp}
                        onMouseOver={showMessageW}
                        onMouseOut={hideMessageW}>
                        </button>
                        {isHoveredW && <div className={styles.mensajeW}>Whatsapp</div>}
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/je-funes">
                        <button 
                        className={styles.linkedin}
                         onMouseOver={showMessageL}
                         onMouseOut={hideMessageL}>
                         </button>
                         {isHoveredL && <div className={styles.mensajeL}>Linkedin</div>}   
                    </Link>
                </li>
                <li>
                    <Link to="https://www.github.com/JE-FUNES">
                        <button
                        className={styles.github}
                        onMouseOver={showMessageG}
                        onMouseOut={hideMessageG}>
                        </button>
                        {isHoveredG && <div className={styles.mensajeG}>GitHub</div>}
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/je.funes">
                        <button 
                        className={styles.instagram}
                        onMouseOver={showMessageI}
                        onMouseOut={hideMessageI}>
                        </button>
                        {isHoveredI && <div className={styles.mensajeI}>Instagram</div>}
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/juliafunes.vinilomall">
                        <button 
                        className={styles.face}
                        onMouseOver={showMessageF}
                        onMouseOut={hideMessageF}>
                        </button>
                        {isHoveredF && <div className={styles.mensajeF}>Facebook</div>}
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )};
                
                

    
 
     
     
     
     export default NavBar; 