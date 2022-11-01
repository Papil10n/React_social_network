import s from './Info.module.css';
import React from "react";

class Info extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {

        return (
            <div className={s.info}>
                <p>Name: {this.props.profile.fullName}</p>
                {!this.state.editMode
                ? <div><span onDoubleClick={ this.activateEditMode }>{!this.props.status ? "------" : this.props.status }</span></div>
                : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } type="text" value={this.state.status}/></div>}
                <p>About: {this.props.profile.aboutMe}</p>
                <p>Instagram: {this.props.profile.contacts.instagram}</p>
                <p>GitHub: {this.props.profile.contacts.github}</p>
                <p>Looking for a job: {this.props.profile.lookingForAJob ? "true" : "false"}</p>
                <p>Description: {this.props.profile.lookingForAJobDescription}</p>
            </div>
        )
    }
}

export default Info;