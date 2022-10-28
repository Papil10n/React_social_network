import s from './UserInfo.module.css';
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";

const UserInfo = (props) => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.about}>
                <Avatar photo={props.profile.photos.small}/>
                <Info profile={props.profile}/>
            </div>
        </div>
    )
}

export default UserInfo;