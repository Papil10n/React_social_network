import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useParams} from "react-router-dom";
import {toggleIsFetching} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.toggleIsFetching(true);
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <>
            {this.props.isFetching ?
            <Preloader/> : <Profile {...this.props} profile={this.props.profile}/>}
        </>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId,
    isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(withRouter(ProfileContainer));