import s from './Header.module.css';
import LogoType from "./LogoType/LogoType";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.content}>
                <LogoType />

            </div>
        </header>
    );
}

export default Header;