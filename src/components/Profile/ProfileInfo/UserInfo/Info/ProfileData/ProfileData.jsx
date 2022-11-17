import React from "react";
import style from "../Info.module.css";

const profileData = ({profile, goToEditMode, isOwner}) => {
    return (
        <div className={style.contacts}>
            <p><b>Full Name:</b> {profile.fullName}</p>
            <p><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</p>

            <p><b>About me:</b> {profile.aboutMe}</p>
            <p><b>Description:</b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '-'}</p>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            { isOwner && <button className={style.editBtn} onClick={goToEditMode}>Edit</button> }
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <p className={style.contac}><em>{contactTitle}: </em> {contactValue ? contactValue : "---"}</p>
}

export default profileData;