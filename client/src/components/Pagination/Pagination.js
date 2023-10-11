import React from "react";
import styles from "./Pagination.module.css";

function Pagination({
  gamesPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  paginate,
}) {
  const pageNumbers = []; // almacena los nº de pág

  for (let i = 1; i <= Math.ceil(totalPosts / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className={styles.paginationDiv}>
      <ul className={styles.pagination}>
        {pageNumbers.length === 0 ? (
          <p style={{ display: "none" }} />
        ) : (
          <button className={styles.page} onClick={handlePrev}>
            «
          </button>
        )}
        {pageNumbers.map((page, i) => (
          <li key={i} className={styles.paginationItem}>
            <span
              className={
                currentPage === page
                  ? `${styles.page} ${styles.active}`
                  : styles.page
              }
              onClick={() => paginate(page)}
            >
              {page}
            </span>
          </li>
        ))}
        {pageNumbers.length === 0 ? (
          <p style={{ display: "none" }} />
        ) : (
          <button className={styles.page} onClick={handleNext}>
            »
          </button>
        )}
      </ul>
    </div>
  );
  
}

export default Pagination;
