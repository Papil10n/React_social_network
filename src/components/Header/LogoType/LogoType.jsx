import s from './LogoType.module.css';

const LogoType = () => {
    return (
        <div className={s.logo}>
            <div className={s.img}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9Rw-LYaH1lB1N56Feh-0Ej0MJSCyDzPDcw&usqp=CAU'>
                </img>
            </div>
            <div className={s.text}>
                <p>Network for </p>
                <p className={s.substring}>Noobs</p>
            </div>
        </div>
    );
}

export default LogoType;