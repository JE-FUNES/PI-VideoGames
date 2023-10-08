import React from 'react';
import { filterPlatform } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import styles from './Css/Filter.module.css';

function PlatformFilter({ setCurrentPage }) {
  const dispatch = useDispatch();

  const handleOptionClick = (optionValue) => {
    setCurrentPage(1);
    dispatch(filterPlatform(optionValue));
  };

  return (
    <div className={styles.platformFilter}>
      <h3>PLATFORMS</h3>
      <div className={styles.options}>
        <button
          onClick={() => handleOptionClick('All')}
          className={styles.option}
        >
          All Platforms
        </button>
        <button
          onClick={() => handleOptionClick('xbox')}
          className={styles.option}
        >
          Xbox
        </button>
        <button
          onClick={() => handleOptionClick('android')}
          className={styles.option}
        >
          Android
        </button>
        <button
          onClick={() => handleOptionClick('playstation')}
          className={styles.option}
        >
          Playstation
        </button>
        <button
          onClick={() => handleOptionClick('pc')}
          className={styles.option}
        >
          PC
        </button>
        <button
          onClick={() => handleOptionClick('nintendo')}
          className={styles.option}
        >
          Nintendo
        </button>
      </div>
    </div>
  );
}

export default PlatformFilter;
