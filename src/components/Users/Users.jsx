import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <div className={styles.pages}>
            {pages.map(pageNum => {
                return (
                    <div onClick={(event) => {
                        props.onPageChanged(pageNum)
                    }}
                         className={props.currentPage === pageNum ? styles.selectedPage : styles.defaultPage}> {pageNum}
                    </div>)
            })}
        </div>
        <div className={styles.users}>
            {
                props.users.map(user =>
                    <NavLink to={'/profile/' + user.id} className={styles.user} key={user.id}>
                        <div className={styles.userMainInfo}>
                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto} className={styles.photo}/>
                            <div>{user.name}</div>
                            {
                                user.followed
                                    ? <button className={styles.button} onClick={() => {
                                        props.unfollow(user.id)
                                    }}> Unfollow </button>
                                    : <button className={styles.button} onClick={() => {
                                        props.follow(user.id)
                                    }}> Follow </button>
                            }
                        </div>
                        <div className={styles.userAddInfo}>
                            <div>{user.status}</div>
                            <div className={styles.location}>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </NavLink>)
            }
        </div>
    </div>
}

export default Users;