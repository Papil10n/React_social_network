import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useLocation, useParams} from "react-router-dom";
import {toggleIsFetching} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            // userId = this.props.id;
            userId = 26468;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                                        updateStatus={this.props.updateStatus}/>}
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId,
    isFetching: state.usersPage.isFetching,
    status: state.profilePage.status
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {toggleIsFetching, getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)