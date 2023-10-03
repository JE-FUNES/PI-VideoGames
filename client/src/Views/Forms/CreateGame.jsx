import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGame } from '../../redux/actions';
import styles from './CreateGame.module.css';
import { allGenres, AllPlatforms, validate } from './constantesCreateGame';


const CreateGame = () => {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    const [genres, setGenres] = useState([]);

    const [platforms, setPlatforms] = useState([]);

    const [input, setInput] = useState({
        name: '',
        description: '',
        platforms: [],
        genres: [],
        image: '',
    });


    
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));

    };

    const handlePlatforms = (e) => {
        const platformValue = e.target.value;
        if (e.target.checked) {
            setPlatforms([...platforms, platformValue]);
        } else {
            setPlatforms(platforms.filter(platform => platform !== platformValue));
        }

    }

    const handleGenres = (e) => {
        const genreValue = e.target.value;
        if (e.target.checked) {
            setGenres([...genres, genreValue]);
        } else {
            setGenres(genres.filter((genre) => genre !== genreValue));
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        input.genres = genres;
        input.platforms = platforms;
        
        // Validar que al menos un género esté seleccionado
        if (input.genres.length === 0) {
        setErrors({ ...errors, genres: 'Select at least one' });
        return;
        } else {
        // Si se seleccionó al menos un género, elimina el mensaje de error
        setErrors({ ...errors, genres: '' });
  }
        // Validar que al menos una plataforma esté seleccionada
        if (input.platforms.length === 0) {
        setErrors({ ...errors, platforms: 'Select at least one' });
        return;
        }else {
            // Si se seleccionó al menos una plataforma, elimina el mensaje de error
            setErrors({ ...errors, platforms: '' });
          }
          

        dispatch(createGame(input));
        alert('Game created!');
        setInput({
            name: '',
            description: '',
            platforms: [],
            genres: [],
            image: '',
        });
        setGenres([]);
        setPlatforms([]);
    }

    return (

        <div className={styles.container}>
            
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
            <div className={styles.title}>
            <h1>Create your Game!</h1>
            <br/>
            <br/>
            <br/>
            </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleInputChange}
                            placeholder='Wtitte your game name here'
                        />
                        {errors.name && (
                            <p className={styles.danger}>{errors.name}</p>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Genres</label>
                            {errors.genres && (
                                <p className={styles.danger2}>{errors.genres}</p>
                            )}
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
                        ) )}
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
                            placeholder='Wtitte your game description here'
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
                        ) )}
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
                            placeholder='Wtitte your game image route here'
                        />
                        {errors.image && (
                            <p className={styles.danger}>{errors.image}</p>
                        )}
                    </div>
                    <button className={styles.button} type="submit">Create Game</button>
                </form>
            </div>
        </div>
    );
}

export default CreateGame;