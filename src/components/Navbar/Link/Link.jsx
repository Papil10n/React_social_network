import s from './Link.module.css';
import {NavLink} from "react-router-dom";

const Link = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.path} className={link => link.isActive ? `${s.obj} ${s.active}` : s.obj}>
                {props.linkName}
            </NavLink>
        </div>
    );
}

export default Link;