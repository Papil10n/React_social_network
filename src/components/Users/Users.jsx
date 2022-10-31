import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink, Navigate} from "react-router-dom";
import {unfollow_u} from "../../redux/users-reducer";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // if (props.isAuth == false) return <Navigate to={'/login'} />

    return <div>

        <div className={styles.pages}>
            {pages.map(pageNum => {
                return (
                    <div onClick={(event) => {
                        console.log(props.currentPage)
                        props.onPageChanged(pageNum)
                        props.setCurrentPage(pageNum)
                        console.log(props.currentPage)

                    }}
                         className={props.currentPage === pageNum ? styles.selectedPage : styles.defaultPage}> {pageNum}
                    </div>)
            })}
        </div>
        <div className={styles.users}>
            {
                props.users.map(user =>
                    <div className={styles.user} key={user.id}>
                        <div className={styles.userMainInfo}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null
                                    ? user.photos.small
                                    : userPhoto} className={styles.photo}/>
                                <div className={styles.name}>{user.name}</div>
                            </NavLink>

                            {
                                user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              className={styles.button} onClick={() => {props.unfollow_u(user.id)}}>
                                        Unfollow
                                    </button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              className={styles.button} onClick={() => {
                                                  props.follow_f(user.id)}}>
                                        Follow
                                    </button>
                            }
                        </div>
                        <div className={styles.userAddInfo}>
                            <div>{user.status}</div>
                            <div className={styles.location}>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </div>)
            }
        </div>
    </div>
}

export default Users;