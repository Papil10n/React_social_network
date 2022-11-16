import React from "react";
import styles from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({
                   currentPage,
                   onPageChanged,
                   totalUsersCount,
                   pageSize,
                   setCurrentPage,
                   users,
                   ...props
               }) => {
    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>

        <div className={styles.users}>
            {
                users.map(u => <User key={u.id} user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow_f={props.follow_f}
                                     unfollow_u={props.unfollow_u}
                />)
            }
        </div>
    </div>
}

export default Users;