import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Upper.module.css';

const Upper = () => {
  const location = useLocation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Obtener el nombre del localStorage o de un estado global si es necesario
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

   // Oculta el componente en la página de inicio
   if (location.pathname === '/') {
    return null;
  }

  // Función para obtener el mensaje personalizado según la ruta actual
  const getCustomMessage = () => {
    switch (location.pathname) {
      case '/home':
        return (
          <p>
            <span className={styles.username}>{userName}</span>! Search for your favorite videogame, or create your own!
          </p>
        );
    
      case '/creategame':
        return (
          <p>
            Fantastic <span className={styles.username}>{userName}</span>! Create your own video game here!
          </p>
        );
      // mensajes personalizados para las proximas rutas
      default:
        return (<p>More than 500.000 video games availables!</p>) ;
    }
  };
  

  return (
    <div className={styles.upper}>
      <p className={styles.message}>{getCustomMessage()}</p>
    </div>
  );
};

export default Upper;
