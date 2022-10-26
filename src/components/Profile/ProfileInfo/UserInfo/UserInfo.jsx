import s from './UserInfo.module.css';
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";

const UserInfo = (props) => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.about}>
                <Avatar/>
                <Info/>
            </div>
        </div>
    )
}

export default UserInfo;