import style from "../Info.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../../../../common/Forms/Forms";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <b>Full Name:</b>
                {createField("Full Name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>Description:</b>
                {createField("Description", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}</b>
                        {createField(`${key}`, `contacts.${key}`, [], Input)}
                    </div>
                })}
            </div>
            <div>
                <button type='submit'>Save</button>
            </div>
        </form>

    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <p className={style.contac}><em>{contactTitle}: </em> {contactValue}</p>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;