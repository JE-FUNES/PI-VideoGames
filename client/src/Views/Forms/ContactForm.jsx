import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import axios from "axios";



function ContactForm() {

    

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        likedPage: 3, // Valor por defecto de 3 estrellas
        reason: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "likedPage") {
            setFormData({
                ...formData,
                [name]: Number(value), // Convierte el valor a número
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    

      const handleStarClick = (rating) => {
        setFormData({
          ...formData,
          likedPage: rating,
        });
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Realizar una solicitud POST al servidor para enviar el formulario
          await axios.post("/sendEmail", formData);
          // Mostrar un mensaje de éxito o redirigir al usuario a una página de agradecimiento
          console.log("Formulario enviado con éxito");
          // Reiniciar el formulario
          setFormData({
            name: "",
            email: "",
            likedPage: 3,
            reason: "",
          });
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
        }
      };

      // Genera estrellas dinámicamente en base a la calificación actual
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const className =
        i <= formData.likedPage ? styles.starActive : styles.starInactive;
      stars.push(
        <span
          key={i}
          className={className}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
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
    <div className={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
            <span
                key={star}
                className={star <= formData.likedPage ? styles.selectedStar : styles.star}
                onClick={() => handleStarClick(star)}
            >
                ★
            </span>
        ))}
    </div>
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
