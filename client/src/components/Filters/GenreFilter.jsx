import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, filterGenre } from '../../redux/actions';
import styles from './Css/Filter.module.css';

function GenreFilter({ setCurrentPage }) {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genresFilter);

  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleOptionClick = (genre) => {
    setCurrentPage(1);
    dispatch(filterGenre(genre));
    console.log('Género seleccionado:', genre);
    console.log('Juegos después del filtrado:', games);
  };

  return (
    <div className={styles.genreFilter}>
      <h2>All Genres</h2>
      <div className={styles.options}>
        <button
          onClick={() => handleOptionClick('All')}
          className={styles.option}
        >
          All Genres
        </button>
        {genres.map((genre, i) => (
          <button
            onClick={() => handleOptionClick(genre.name)}
            className={styles.option}
            key={i}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
