import React from "react";
import styles from "./Paginator.module.css";


const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.pages}>
            {pages.map(p => {
                return (
                    <div key={p} onClick={(e) => {
                        onPageChanged(p);
                    }}
                         className={currentPage === p ? styles.selectedPage : styles.defaultPage}> {p}
                    </div>)
            })}
    </div>
}

export default Paginator;