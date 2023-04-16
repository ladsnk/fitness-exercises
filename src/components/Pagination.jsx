import React from "react";

import "../styles/pagination.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalPosts / postsPerPage) },
    (v, i) => i + 1
  );

  return (
    <ul className="page-list">
      {pageNumbers.map((number) =>
        number < 3 ||
        number > pageNumbers.length - 2 ||
        (number > currentPage - 3 && number < currentPage + 3) ? (
          <li
            onClick={() => paginate(number)}
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <button>{number}</button>
          </li>
        ) : number === pageNumbers.length - 2 &&
          currentPage < pageNumbers.length / 2 ? (
          <li key={number} className="page-item">
            <button>...</button>
          </li>
        ) : (
          currentPage > pageNumbers.length / 2 &&
          number === 3 && (
            <li key={number} className="page-item">
              <button>...</button>
            </li>
          )
        )
      )}
    </ul>
  );
};

export default Pagination;
