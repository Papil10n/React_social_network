import s from './ProfileInfo.module.css';
import UserInfo from "./UserInfo/UserInfo";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={s.backGround}>
                    <img className={s.img}
                         src='https://i.pinimg.com/originals/37/05/1d/37051d912d8be4a1218c4be7f970fd4a.jpg'>
                    </img>
                </div>
                <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
        )
    }

}

export default ProfileInfo;