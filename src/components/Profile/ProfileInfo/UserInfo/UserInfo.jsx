import s from './UserInfo.module.css';
import Avatar from "./Avatar/Avatar";
import InfoWithHooks from "./Info/InfoWithHooks";

const UserInfo = (props) => {

    return (
        <div className={s.descriptionBlock}>
            <div className={s.about}>
                <Avatar photo={props.profile.photos.small}/>
                <InfoWithHooks profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default UserInfo;