import s from './Info.module.css';
import React, {useEffect, useState} from "react";
import style from "./Info.module.css";

const InfoWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.info}>
            <p><b>Name:</b> {props.profile.fullName}</p>
            <p><b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</p>
            { !editMode &&
                <div>
                    <b>Status: </b>
                    <span className={style.status} onDoubleClick={activateEditMode}>{props.status || "-------" }</span>
                </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
            </div>
            }
            <p><b>About me:</b> {props.profile.aboutMe}</p>
            <p><b>Description:</b> {props.profile.lookingForAJobDescription}</p>
            <div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <p className={style.contac}><em>{contactTitle}: </em> {contactValue}</p>
}

export default InfoWithHooks;