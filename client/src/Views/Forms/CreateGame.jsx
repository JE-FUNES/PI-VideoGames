import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGame } from '../../redux/actions';
import styles from './CreateGame.module.css';
import { allGenres, AllPlatforms, validate } from './constantesCreateGame';
import { handleInputChange, handlePlatforms, handleGenres, handleSubmit } from './handlersCreateGame';


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


    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(input, genres, platforms, errors, setErrors, dispatch, setInput, setGenres, setPlatforms, createGame);
    }

    return (

        <div className={styles.routeContainer}>
            
            <div className={styles.formContainer}>
                <form onSubmit={onSubmit}>
            
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleInputChange(input, setInput, validate, setErrors, e)}
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
                                    onChange={(e) => handleGenres(genres, setGenres, e)}
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
                            onChange={(e) => handleInputChange(input, setInput, validate, setErrors, e)}
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
                                    onChange={(e) => handlePlatforms(platforms, setPlatforms, e)}
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
                            onChange={(e) => handleInputChange(input, setInput, validate, setErrors, e)}
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