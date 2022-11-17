import s from './ProfileInfo.module.css';
import UserInfo from "./UserInfo/UserInfo";
import Preloader from "../../common/Preloader/Preloader";
import style from "./UserInfo/Info/Info.module.css";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    if (!profile) {
        return <Preloader />
    } else {
        const mainPhotoSelect = (e) => {
            if (e.target.files.length) {
                savePhoto(e.target.files[0]);
            }
        }
        return (
            <div>
                <div className={s.backGround}>
                    <img className={s.img}
                         alt='img'
                         src='https://i.pinimg.com/originals/37/05/1d/37051d912d8be4a1218c4be7f970fd4a.jpg'>
                    </img>
                    { isOwner && <input className={style.fileInput} type={"file"} onChange={mainPhotoSelect} />}
                </div>
                <UserInfo profile={profile} saveProfile={saveProfile} status={status} isOwner={isOwner} updateStatus={updateStatus}/>
            </div>
        )
    }

}

export default ProfileInfo;