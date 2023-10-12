import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  // titulos onHover
  const [isHovered, setIsHovered] = useState({
    home: false,
    contact: false,
    whatsapp: false,
    linkedin: false,
    github: false,
    instagram: false,
    facebook: false,
  });

  const handleHover = (itemName, isHovering) => {
    setIsHovered({ ...isHovered, [itemName]: isHovering });
  };

  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li className={styles.searchBar}>
            <SearchBar />
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
                onMouseOver={() => handleHover("home", true)}
                onMouseOut={() => handleHover("home", false)}
              ></button>
              {isHovered.home && <div className={styles.mensaje}>Home</div>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/contactus">
              <button
                className={styles.contact}
                onMouseOver={() => handleHover("contact", true)}
                onMouseOut={() => handleHover("contact", false)}
              ></button>
              {isHovered.contact && (
                <div className={styles.mensaje1}>Contact</div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://wa.me/5493512737199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.whapp}
                onMouseOver={() => handleHover("whatsapp", true)}
                onMouseOut={() => handleHover("whatsapp", false)}
              ></button>
              {isHovered.whatsapp && (
                <div className={styles.mensajeW}>Whatsapp</div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://www.linkedin.com/je-funes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.linkedin}
                onMouseOver={() => handleHover("linkedin", true)}
                onMouseOut={() => handleHover("linkedin", false)}
              ></button>
              {isHovered.linkedin && (
                <div className={styles.mensajeL}>Linkedin</div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://www.github.com/JE-FUNES"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.github}
                onMouseOver={() => handleHover("github", true)}
                onMouseOut={() => handleHover("github", false)}
              ></button>
              {isHovered.github && (
                <div className={styles.mensajeG}>GitHub</div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://www.instagram.com/je.funes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={styles.instagram}
                onMouseOver={() => handleHover("instagram", true)}
                onMouseOut={() => handleHover("instagram", false)}
              ></button>
              {isHovered.instagram && (
                <div className={styles.mensajeI}>Instagram</div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://www.facebook.com/juliafunes.vinilomall"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.face}
              onMouseOver={() => handleHover("facebook", true)}
              onMouseOut={() => handleHover("facebook", false)}
            >
              {isHovered.facebook && (
                <div className={styles.mensajeF}>Facebook</div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/zuma" className={styles.botonZuma}>
              Play Zuma Now !
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
