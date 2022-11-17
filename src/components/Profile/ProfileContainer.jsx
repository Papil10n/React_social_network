import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useLocation, useParams} from "react-router-dom";
import {toggleIsFetching} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userID;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // userId = 26468;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userID != prevProps.router.params.userID) {
            this.refreshProfile();
        }
    }


    render() {
        return <>
            {
                this.props.isFetching ?
                    <Preloader/>
                    :
                    <Profile {...this.props} isOwner={!this.props.router.params.userID} savePhoto={this.props.savePhoto}
                             profile={this.props.profile} status={this.props.status} saveProfile={this.props.saveProfile}
                             updateStatus={this.props.updateStatus}/>
            }
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
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
    connect(mapStateToProps, {
        toggleIsFetching, getUserProfile, getStatus, updateStatus, savePhoto, saveProfile
    }),
    withRouter,
    withAuthRedirect,
    // withAuthRedirect
)(ProfileContainer)