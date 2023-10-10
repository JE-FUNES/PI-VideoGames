import React from "react";
import styles from "./Pagination.module.css";

function Pagination({
  gamesPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    if (currentPage !== pageNumbers.length) setCurrentPage(currentPage + 1);

    if (currentPage + 1 > currentPage + 5) {
      setCurrentPage(currentPage + 5);
    }
  }

  function handlePrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % 5 === 0) {
        setCurrentPage(currentPage - 5);
      }
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
        {pageNumbers.map((page, i) => {
          if (i < currentPage * 5 && i >= (currentPage - 1) * 5) {
            return (
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
            );
          } else {
            return null;
          }
        })}
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
