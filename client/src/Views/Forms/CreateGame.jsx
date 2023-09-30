import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGame } from '../../redux/actions';
import styles from './CreateGame.module.css';


const CreateGame = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        description: '',
        platforms: [],
        genres: [],
        image: '',
    });

    const [errors, setErrors] = useState({});
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const allGenres = [
             "Action",
            "Indie",
            "Adventure",
            "RPG",
            "Strategy",
            "Shooter",
            "Casual",
            "Simulation",
            "Puzzle",
            "Arcade",
            "Platformer",
            "Racing",
            "Massively Multiplayer",
            "Sports",
            "Fighting",
            "Family",
            "Board Games",
            "Educational",
            "Card"
    ];

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
        if (e.target.checked) {
            setPlatforms([...platforms, e.target.value]);
        } else {
            setPlatforms(platforms.filter(p => p !== e.target.value));
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

        // corregi el handler de creacion de juegos para que actualie y relacione con la tabla intermedia, por eso cambio de nombre
        input.genres = genres;

        dispatch(createGame(input));
        alert('Game created!');
        setInput({
            name: '',
            description: '',
            platforms: [],
            //genres: [],
            image: '',
        });
        setGenres([]);
        setPlatforms([]);
    }

    const validate = (input) => {
        let errors = {};
        if (!input.name) {
            errors.name = 'Name is required';
        }
        if (!input.description) {
            errors.description = 'Description is required';
        }
        if (!input.image) {
            errors.image = 'Image is required';
        }
        return errors;
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
                        <div className={styles.checkboxContainer}>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="PC"
                                    value="PC"
                                    onChange={handlePlatforms}
                                />
                                PC
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="PlayStation"
                                    value="PlayStation"
                                    onChange={handlePlatforms}
                                />
                                PlayStation
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="Xbox"
                                    value="Xbox"
                                    onChange={handlePlatforms}
                                />
                                Xbox
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="Nintendo"
                                    value="Nintendo"
                                    onChange={handlePlatforms}
                                />
                                Nintendo
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="iOS"
                                    value="iOS"
                                    onChange={handlePlatforms}
                                />
                                iOS
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="Android"
                                    value="Android"
                                    onChange={handlePlatforms}
                                />
                                Android
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="macOS"
                                    value="macOS"
                                    onChange={handlePlatforms}
                                />
                                macOS
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    name="Linux"
                                    value="Linux"
                                    onChange={handlePlatforms}
                                />
                                Linux
                            </label>
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