import s from './Avatar.module.css';
import noNameUser from '../../../../../assets/images/user.png';

const Avatar = (props) => {
    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <img src={props.photo ? props.photo : noNameUser}
                />
            </div>
        </div>
    )
}

export default Avatar;