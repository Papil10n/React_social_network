import s from './UserInfo.module.css';
import Avatar from "./Avatar/Avatar";
import InfoWithHooks from "./Info/InfoWithHooks";

const UserInfo = ({profile, isOwner, status, updateStatus, saveProfile}) => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.about}>
                <Avatar photo={profile.photos.small}/>
                <InfoWithHooks saveProfile={saveProfile} profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default UserInfo;