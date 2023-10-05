import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        likedPage: 3, // Valor por defecto de 3 estrellas
        reason: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico.
        // Puedes usar una biblioteca como 'nodemailer' en un servidor Node.js para manejar esto.

        // Luego de enviar el formulario, puedes mostrar un mensaje de éxito o redirigir al usuario a una página de agradecimiento.

        // Aquí solo mostramos la información en la consola por ahora:
        console.log("Form Data:", formData);

        // Reiniciar el formulario
        setFormData({
            name: "",
            email: "",
            likedPage: 3,
            reason: "",
        });
    };

    return (
        <div className={styles.routeContainer}>
            <div className={styles.formContainer}>
                <h2>Contact Us</h2>
                <form onSubmit={handleFormSubmit}>

                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Did you like the page? (1-5 stars):</label>
                    <input
                        type="number"
                        id="likedPage"
                        name="likedPage"
                        min="1"
                        max="5"
                        value={formData.likedPage}
                        onChange={handleInputChange}
                        required
                        />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="reason">Reason for contact:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        rows="4"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                        />
                </div>

                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default ContactForm;
