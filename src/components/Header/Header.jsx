import s from './Header.module.css';
import LogoType from "./LogoType/LogoType";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.content}>
                <LogoType />
                <div className={s.loginBlock}>
                    { props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div> :
                    <NavLink className={s.login} to={'/login'}>Login</NavLink> }
                </div>
            </div>
        </header>
    );
}

export default Header;