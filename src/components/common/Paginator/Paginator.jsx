import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  curentPage,
  onPageChanged,
  portionSize = 2,
}) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.paginator}>
      <div className={styles.item}>
        {curentPage === 1 || curentPage === 2 ? null : (
          <button
            onClick={() => {
              onPageChanged(pages[0]);
            }}
          >
            {"<<<"}
          </button>
        )}
      </div>
      <div className={styles.item}>
        {curentPage === 1 ? null : (
          <button
            onClick={() => {
              onPageChanged(curentPage - 1);
            }}
          >
            {"<"}
          </button>
        )}
      </div>
      <div className={styles.item}>
        {curentPage === pages[pages.length - 1] ? null : (
          <button
            onClick={() => {
              onPageChanged(curentPage + 1);
            }}
          >
            {">"}
          </button>
        )}
      </div>
      <div  className={styles.item}>
        {curentPage === pages[pages.length - 1] ||
        curentPage === pages[pages.length + 1] ? null : (
          <button
            onClick={() => {
              onPageChanged(pages[pages.length - 1]);
            }}
          >
            {">>>"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
