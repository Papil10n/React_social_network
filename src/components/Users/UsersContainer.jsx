import React from "react";
import {connect} from "react-redux";
import {
    follow_f, getUsers,
    setCurrentPage, setTotalUsersCount, setUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow_u,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        /* this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            console.log(data.totalCount)
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount / 340);
        });
        */

    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                      pageSize={this.props.pageSize}
                                      currentPage={this.props.currentPage}
                                      onPageChanged={this.onPageChanged}
                                      follow_f={this.props.follow_f}
                                      unfollow_u={this.props.unfollow_u}
                                      users={this.props.users}
                                      followingInProgress={this.props.followingInProgress}
                                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                                      setCurrentPage={this.props.setCurrentPage}

                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default connect(mapStateToProps,
    {
        setCurrentPage,
        toggleFollowingProgress,
        toggleIsFetching,
        getUsers,
        setUsers,
        setTotalUsersCount,
        follow_f,
        unfollow_u,

    })(UsersContainer);

