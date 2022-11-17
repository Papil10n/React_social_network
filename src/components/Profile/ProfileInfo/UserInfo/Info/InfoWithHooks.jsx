import s from './Info.module.css';
import React, {useEffect, useState} from "react";
import style from "./Info.module.css";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";


const InfoWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let [editData, setEditData] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

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
    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditData(false);
            })
    }

    return (
        <div className={s.info}>
            {!editMode &&
                <div>
                    <b>Status: </b>
                    <span className={style.status} onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} className={style.inputStatus} onChange={onStatusChange}
                           onBlur={deactivateEditMode} value={status}/>
                </div>
            }

            {editData ? <ProfileDataReduxForm onSubmit={onSubmit} profile={props.profile}/> :
                <ProfileData profile={props.profile} initialValues={props.profile} goToEditMode={() => {
                    setEditData(true)
                }} isOwner={props.isOwner}/>}
        </div>
    )
}


export default InfoWithHooks;