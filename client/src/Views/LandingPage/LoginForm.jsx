import React from "react";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


function LoginForm()  {

    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      const inputName = e.target.value;
      // Verificar si el nombre cumple con las reglas (max 10 caracteres y solo letras)
      if (inputName.length > 10) {
        setErrorMessage('Máximo 10 caracteres');
      } else if (!/^[a-zA-Z]+$/.test(inputName)) {
        setErrorMessage('Sólo letras son permitidas');
      } else {
        setErrorMessage('');
      }
      // Actualizar el estado del nombre
      setName(inputName);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Verificar si no hay errores y el nombre está completo
      if (!errorMessage && name.trim() !== '') {
        // Guardar el nombre en localStorage o en un estado global si es necesario
        localStorage.setItem('userName', name);
        // Redirigir a la página de inicio
        navigate('/home');
      }
    };

    return (


        <div className={styles.contenedorInput}>

                <form onSubmit={handleFormSubmit}>
          
                    <input 
                    type="text" 
                    id="name"
                    placeholder="Please enter YOUR NAME here"
                    value={name}
                    onChange={handleInputChange}
                    maxLength={10}
                    />
                    <p className={styles.error}>{errorMessage}</p>
                    <button type="submit" className={styles.boton} />
                    </form>
        </div>
    )
}
                    


export default LoginForm