import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  // según la ruta en la que se encuentre, muestra un mensaje personalizado
  // si esta en /home, muestra el mensaje " Welcome {userName} !, Search for your favorite video game, or create your own! "    
  // si está en /create, muestra el mensaje " {userName}: Create your own video game here! "
  // si está en /Detail, muestra el mensaje " {userName}: All the info about your favorite video game! "

  const PersonalizedMessage = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // obtiene el nombre para el saludo personalizado
  useEffect(() => {
    // Obtener el nombre del localStorage o de un estado global si es necesario
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

    const rutaActual = navigate.location.path;
    switch (rutaActual) {
      case '/home':
        return `Welcome ${userName} !, Search for your favorite video game, or create your own!`;
      case '/creategame':
        return `Fantastic ${userName} ! Create your own video game here!`;
      case '/detail':
        return `You want it ${userName}... you got it! All the info about your favorite video game here!`;
      default: 
        return `Welcome ${userName} !, Search for your favorite video game, or create your own!`;
    }


}

export default PersonalizedMessage;