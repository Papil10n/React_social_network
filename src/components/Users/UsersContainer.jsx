import React from "react";
import {connect} from "react-redux";
import {
    follow_f, requestUsers,
    setCurrentPage, setTotalUsersCount, setUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow_u,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getUsers,
    getTotalUsersCount
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNum) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNum, pageSize);

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
                                      isAuth={this.props.isAuth}

                />}
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage,toggleFollowingProgress,
            toggleIsFetching, getUsers: requestUsers, setUsers, setTotalUsersCount, follow_f,
            unfollow_u}))(UsersContainer)

