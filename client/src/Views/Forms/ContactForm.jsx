import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { submitContactForm } from "../../redux/actions";
import image from "../../Images/julia_2023_4x4.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
        [name]: Number(value),
      });
    } else {
      if (name === "name" && value.length > 30) {
        return;
      }
      if (name === "reason" && value.length > 200) {
        return;
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Validación de errores
    const newErrors = { ...errors };
    if (name === "name" && value.trim() === "") {
      newErrors[name] = "Name is required";
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      likedPage: rating,
    });
  };

  const handleFormSubmit = () => {
    dispatch(submitContactForm(formData));
    alert("Form Send!");
    navigate("/home");
  };

  return (
    <div className={styles.routeContainer}>
      <div className={styles.formContainer}>
        <h2>Contact Me</h2>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <br />
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
            <br />
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
            <label>Did you like the page?</label>
            <br />
            <div className={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= formData.likedPage
                      ? styles.selectedStar
                      : styles.star
                  }
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reason">Reason for contact:</label>
            <br />
            <textarea
              id="reason"
              name="reason"
              rows="4"
              value={formData.reason}
              onChange={handleInputChange}
              required
            />
          </div>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <h2>About this web...</h2>
        <p>
          This is a web page made with React, Redux, Node.js, Express,
          Sequelize, PostgreSQL, CSS and HTML.
        </p>
        <p>It was made for the semi-final project of the Henry bootcamp.</p>
        <p>
          It is a web page where you can find information about videogames, such
          as their name, description, release date, rating, platforms, genres
          and stores.
        </p>
        <p>
          You can also order alphabetically or by rating, you can also filter by
          platform or genre.
        </p>
        <p>And you can also create your own videogame!</p>
        <img src={image} alt="Una foto de mí" />
        Julia. E. Funes - Cohorte 42a - Soy Henry.-
      </div>
    </div>
  );
}

export default ContactForm;
