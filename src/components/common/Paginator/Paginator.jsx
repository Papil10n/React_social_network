import React, {useState} from "react";
import styles from "./Paginator.module.css";


const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.pages}>
        { portionNumber > 1 &&
            <button className={styles.toggleBtn} onClick={() => {setPortionNumber(portionNumber - 1)}}>Back</button>
        }
            {pages
                .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map(p => {
                return (
                    <div key={p} onClick={(e) => {
                        onPageChanged(p);
                    }}
                         className={currentPage === p ? styles.selectedPage : styles.defaultPage}> {p}
                    </div>)
            })}
        { portionCount > portionNumber &&
            <button className={styles.toggleBtn} onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>
        }
    </div>
}

export default Paginator;