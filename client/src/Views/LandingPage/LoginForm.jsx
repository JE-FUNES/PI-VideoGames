import React, {useState} from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { preloadCards } from "../../redux/actions";

function LoginForm({preloadCards}) {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const inputName = e.target.value;

        // Formatear el nombre: primera letra mayúscula, el resto en minúsculas
        const formattedName = inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

        // Verificar si el nombre cumple con las reglas (máximo 10 caracteres y solo letras)
        if (formattedName.length > 10) {
            setErrorMessage('Máximo 10 caracteres');
        } else if (!/^[a-zA-Z]+$/.test(formattedName)) {
            setErrorMessage('Sólo letras son permitidas');
        } else {
            setErrorMessage('');
        }

        // Actualizar el estado del nombre con el nombre formateado
        setName(formattedName);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Verificar si no hay errores y el nombre está completo
        if (!errorMessage && name.trim() !== '') {
            setIsLoading(true);
            try {
                // Llamar a la acción para precargar los juegos de forma asincrónica
            await preloadCards();
            // Guardar el nombre en localStorage o en un estado global si es necesario
            localStorage.setItem('userName', name);
            // Redirigir a la página de inicio
            navigate('/home');
            } catch (error) {
                console.log(error);
            } finally
            {
                setIsLoading(false);
            }

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
                <button
                    type="submit"
                    className={styles.boton}
                    onClick={handleFormSubmit}
                    data-loading={isLoading ? 'true' : 'false'}
                    />

            </form>
        </div>
    )
}

export default connect (null, {preloadCards})(LoginForm);
