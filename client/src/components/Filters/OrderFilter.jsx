import React from "react";
import { filterOrdered, filterRating } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./Css/Filter.module.css";

function OrderFilter({ setCurrentPage }) {
  const dispatch = useDispatch();

  const handleOptionClick = (optionValue) => {
    setCurrentPage(1);
    if (optionValue === "asc" || optionValue === "desc") {
      dispatch(filterOrdered(optionValue));
    } else {
      dispatch(filterRating(optionValue));
    }
  };

  return (
    <div className={styles.orderFilter}>
      <h2>Order By</h2>
      <div className={styles.options}>
        <h3>ABC</h3>
        <button
          onClick={() => handleOptionClick("asc")}
          className={styles.option}
        >
          A to Z
        </button>
        <button
          onClick={() => handleOptionClick("desc")}
          className={styles.option}
        >
          Z to A
        </button>

        <h3>RATING</h3>
        <button
          onClick={() => handleOptionClick("rAsc")}
          className={styles.option}
        >
          ➕ to ➖
        </button>
        <button
          onClick={() => handleOptionClick("rDesc")}
          className={styles.option}
        >
          ➖ to ➕
        </button>
      </div>
    </div>
  );
}

export default OrderFilter;
