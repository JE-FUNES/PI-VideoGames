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

  // Función para obtener el mensaje personalizado según la ruta actual
  const getCustomMessage = () => {
    switch (location.pathname) {
      case '/home':
        return `Welcome ${userName}! Search for your favorite video game, or create your own!`;
      case '/detail/:id':
        return `You want it ${userName}... you got it! All the info about your favorite video game here!`;
      case '/creategame':
        return `Fantastic ${userName}! Create your own video game here!`;
      // Agrega más rutas y mensajes personalizados según tus necesidades
      default:
        return '';
    }
  };

  return (
    <div className={styles.ContainerUpper}>
      <p className={styles.message}>{getCustomMessage()}</p>
    </div>
  );
};

export default Upper;
