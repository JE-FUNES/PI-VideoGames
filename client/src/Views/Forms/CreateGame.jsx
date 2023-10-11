import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGame } from "../../redux/actions";
import styles from "./CreateGame.module.css";
import { allGenres, AllPlatforms, validate, validateInput } from "./constantesCreateGame";

const CreateGame = () => {
  const dispatch = useDispatch();

  const [createdGame, setCreatedGame] = useState(null);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [genres, setGenres] = useState([]);

  const [platforms, setPlatforms] = useState([]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: [],
    genres: [],
    image: "",
    released: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlePlatforms = (e) => {
    const platformValue = e.target.value;
    if (e.target.checked) {
      setPlatforms([...platforms, platformValue]);
    } else {
      setPlatforms(platforms.filter((platform) => platform !== platformValue));
    }
  };

  const handleGenres = (e) => {
    const genreValue = e.target.value;
    if (e.target.checked) {
      setGenres([...genres, genreValue]);
    } else {
      setGenres(genres.filter((genre) => genre !== genreValue));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    input.genres = genres;
    input.platforms = platforms;
  
    const errors = validateInput(input, genres, platforms);
  
    setErrors(errors);
  
    const hasErrors = Object.values(errors).some((error) => !!error);
  
    if (hasErrors) {
      alert("Please fill in all the required fields.");
    } else {
      dispatch(createGame(input))
      .then((response) => {
        if (response) {
          setCreatedGame(response);
          navigate(`/detailnewgame/${response.id}`);
        }
      });
      alert("Game created!");
      setInput({
        name: "",
        description: "",
        platforms: [],
        genres: [],
        image: "",
        released: "",
        rating: "",
      });
      setGenres([]);
      setPlatforms([]);
      
    }
  };

  return (
    <div className={styles.routeContainer}>
      <div className={styles.formContainer}>
        <h2>Create a Game</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={input.name}
              onChange={handleInputChange}
              placeholder="Your game name here"
            />
            {errors.name && <p className={styles.danger}>{errors.name}</p>}
          </div>
          <div className={styles.formGroupHalf}> 
          <label className={styles.label}>Rating</label>
          <input
            className={styles.input}
            type="number"
            name="rating"
            value={input.rating}
            onChange={handleInputChange}
            placeholder="Your game rating here (0 - 5)"
          />
           
            <label className={styles.label}>Released</label>
            <input
              className={styles.input}
              type="date"
              name="released"
              value={input.released}
              onChange={handleInputChange}
              placeholder="Your game released here"
            />
            </div>


          <div className={styles.formGroup}>
            <label className={styles.label}>Genres</label>
            {errors.genres && <p className={styles.danger2}>{errors.genres}</p>}
            <div className={styles.checkboxContainer}>
              {allGenres.map((genreName) => (
                <label key={genreName} className={styles.checkboxLabel}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="genres"
                    value={genreName}
                    onChange={handleGenres}
                    checked={genres.includes(genreName)}
                  />
                  {genreName}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea
              className={styles.input}
              type="text"
              name="description"
              value={input.description}
              onChange={handleInputChange}
              placeholder="Your game description here"
            />
            {errors.description && (
              <p className={styles.danger}>{errors.description}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Platforms</label>
            {errors.platforms && (
              <p className={styles.danger2}>{errors.platforms}</p>
            )}
            <div className={styles.checkboxContainer}>
              {AllPlatforms.map((platformName) => (
                <label key={platformName} className={styles.checkboxLabel}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="platforms"
                    value={platformName}
                    onChange={handlePlatforms}
                    checked={platforms.includes(platformName)}
                  />
                  {platformName}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Image</label>
            <input
              className={styles.input}
              type="text"
              name="image"
              value={input.image}
              onChange={handleInputChange}
              placeholder="Your game image route here (http)"
            />
            {errors.image && <p className={styles.danger}>{errors.image}</p>}
          </div>
          <button className={styles.button} type="submit">
            Create Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;