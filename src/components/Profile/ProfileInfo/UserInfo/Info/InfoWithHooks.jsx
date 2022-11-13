import s from './Info.module.css';
import React, {useEffect, useState} from "react";

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
            <p>Name: {props.profile.fullName}</p>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-------" }</span>
                </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
            </div>
            }

            <p>About: {props.profile.aboutMe}</p>
            <p>Instagram: {props.profile.contacts.instagram}</p>
            <p>GitHub: {props.profile.contacts.github}</p>
            <p>Looking for a job: {props.profile.lookingForAJob ? "true" : "false"}</p>
            <p>Description: {props.profile.lookingForAJobDescription}</p>
        </div>
    )
}

export default InfoWithHooks;