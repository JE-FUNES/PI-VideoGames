import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useState} from 'react';


const NavBar = () => {

  //const [ currentPage, setCurrentPage ] = useState( 1 );
  

  
  // palabras onMouseHover del menu
  
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHoveredW, setIsHoveredW] = useState(false);
  const [isHoveredL, setIsHoveredL] = useState(false);
  const [isHoveredG, setIsHoveredG] = useState(false);
  const [isHoveredI, setIsHoveredI] = useState(false);
  const [isHoveredF, setIsHoveredF] = useState(false);
  
  

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
        <nav > 
            <ul>
                
                <li className={styles.searchBar}>
                  <SearchBar/>
                </li>
              
                <li>
                    <NavLink to="/creategame" className={styles.boton}>
                        Create your Game
                    </NavLink>
                </li>
               
                <li>
                    <NavLink to="/home">
                        <button 
                        className={styles.home} 
                        onMouseOver={showMessage}
                        onMouseOut={hideMessage}>
                        </button>
                        {isHovered && <div className={styles.mensaje}>Home</div>}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contactus">
                        <button 
                        className={styles.contact}
                        onMouseOver={showMessage1}
                        onMouseOut={hideMessage1}>
                        </button>
                        {isHovered1 && <div className={styles.mensaje1}>Contact</div>}
                    </NavLink>
                </li>
               
                <li>
                    <NavLink to="https://wa.me/5493512737199" target="_blank" rel="noopener noreferrer">
                        <button 
                        className={styles.whapp}
                        onMouseOver={showMessageW}
                        onMouseOut={hideMessageW}>
                        </button>
                        {isHoveredW && <div className={styles.mensajeW}>Whatsapp</div>}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="https://www.linkedin.com/je-funes" target="_blank" rel="noopener noreferrer">
                        <button 
                        className={styles.linkedin}
                         onMouseOver={showMessageL}
                         onMouseOut={hideMessageL}>
                         </button>
                         {isHoveredL && <div className={styles.mensajeL}>Linkedin</div>}   
                    </NavLink>
                </li>

                <li>
                    <NavLink to="https://www.github.com/JE-FUNES" target="_blank" rel="noopener noreferrer">
                        <button
                        className={styles.github}
                        onMouseOver={showMessageG}
                        onMouseOut={hideMessageG}>
                        </button>
                        {isHoveredG && <div className={styles.mensajeG}>GitHub</div>}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="https://www.instagram.com/je.funes" target="_blank" rel="noopener noreferrer">
                        <button 
                        className={styles.instagram}
                        onMouseOver={showMessageI}
                        onMouseOut={hideMessageI}>
                        </button>
                        {isHoveredI && <div className={styles.mensajeI}>Instagram</div>}
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="https://www.facebook.com/juliafunes.vinilomall" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.face}
                        onMouseOver={showMessageF}
                        onMouseOut={hideMessageF}>
                        
                        {isHoveredF && <div className={styles.mensajeF}>Facebook</div>}
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )};
                    
                    
     export default NavBar; 