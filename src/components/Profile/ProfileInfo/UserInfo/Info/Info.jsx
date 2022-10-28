import s from './Info.module.css';

const Info = (props) => {
    return (
        <div className={s.info}>
            <p>Name: {props.profile.fullName}</p>
            <p>About: {props.profile.aboutMe}</p>
            <p>Instagram: {props.profile.contacts.instagram}</p>
            <p>GitHub: {props.profile.contacts.github}</p>
            <p>Looking for a job: {props.profile.lookingForAJob ? "true" : "false"}</p>
            <p>Description: {props.profile.lookingForAJobDescription}</p>
        </div>
    )
}

export default Info;