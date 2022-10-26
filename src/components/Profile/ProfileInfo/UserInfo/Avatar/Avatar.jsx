import s from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                     alt="#"/>
            </div>
        </div>
    )
}

export default Avatar;