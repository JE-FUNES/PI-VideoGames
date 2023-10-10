import React from "react";
import { filterCreated } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./Css/Filter.module.css";

function CreatedFilter({ setCurrentPage }) {
  const dispatch = useDispatch();

  const handleOptionClick = (optionValue) => {
    setCurrentPage(1);
    dispatch(filterCreated(optionValue));
  };

  return (
    <div className={styles.CreatedFilters}>
      <h3>ORIGIN</h3>
      <div className={styles.options}>
        <button
          onClick={() => handleOptionClick("All")}
          className={styles.option}
        >
          ALL Origins
        </button>
        <button
          onClick={() => handleOptionClick("Api")}
          className={styles.option}
        >
          API
        </button>
        <button
          onClick={() => handleOptionClick("created")}
          className={styles.option}
        >
          DB
        </button>
      </div>
    </div>
  );
}

export default CreatedFilter;
