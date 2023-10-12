import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Upper.module.css";

const Upper = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Obtener el nombre del usuario de localStorage
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Lo oculta en la LandingPage
  if (location.pathname === "/") {
    return null;
  }

  // mensaje personalizado según la ruta actual
  const getCustomMessage = () => {
    switch (location.pathname) {
      case "/home":
        return (
          <p>
            <span className={styles.username}>{userName}</span>! Search for your
            favorite videogame, or create your own game card!
          </p>
        );

      case "/creategame":
        return (
          <p>
            Fantastic <span className={styles.username}>{userName}</span>!
            Create your own game card here!
          </p>
        );

      case "/contactus":
        return (
          <p>
            Hi again <span className={styles.username}>{userName}</span>...
            Contact me and let me know what you think about this project!
          </p>
        );

        case "/zuma":
        return (
          <p>
            Play Zuma right now <span className={styles.username}>{userName}</span>!
          </p>
        );

      default:
        return (
          <p>
            all the info about your favorite videogames{" "}
            <span className={styles.username}>{userName}</span>: more than
            500,000!
          </p>
        );
    }
  };

  return (
    <div className={styles.upper}>
      <p className={styles.message}>{getCustomMessage()}</p>
    </div>
  );
};

export default Upper;
