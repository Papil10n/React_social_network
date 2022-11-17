import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink, Navigate} from "react-router-dom";


const User = ({user, followingInProgress, unfollow_u, follow_f}) => {
    return <div>
        <div className={styles.user}>
            <div className={styles.userMainInfo}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null
                        ? user.photos.small
                        : userPhoto} className={styles.photo}
                        alt="img"/>
                    <div className={styles.name}>{user.name}</div>
                </NavLink>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={styles.button} onClick={() => {
                            unfollow_u(user.id)
                        }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={styles.button} onClick={() => {
                            follow_f(user.id)
                        }}>
                            Follow
                        </button>
                }
            </div>
            <div className={styles.userAddInfo}>
                <div>Country: Ukraine</div>
                <div>{user.status ? `Status : ${user.status}` : ''}</div>
            </div>
        </div>
    </div>
}

export default User;