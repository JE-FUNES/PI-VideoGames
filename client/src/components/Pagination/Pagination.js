import React from "react";
import "./Pagination.css";

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
    <div id="paginationDiv">
      <ul className="pagination">
        {pageNumbers.length === 0 ? (
          <p style={{ display: "none" }} />
        ) : (
          <button className="page" onClick={handlePrev}>
            Prev
          </button>
        )}
        {pageNumbers.map((page, i) => {
          if (i < currentPage * 5 && i >= (currentPage - 1) * 5) {
            return (
              <li key={i} className="paginationItem">
                <span
                  className={currentPage === page ? "page active" : "page"}
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
          <button className="page" onClick={handleNext}>
            Next
          </button>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
