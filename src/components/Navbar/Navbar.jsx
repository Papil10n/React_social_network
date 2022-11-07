import s from './Navbar.module.css';
import Link from "./Link/Link";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <Link path="/profile" linkName="Profile" />
            <Link path="/dialogs" linkName="Messages" />
            <Link path="/users" linkName="Users" />
            <Link path="/news" linkName="News" />
            <Link path="/music" linkName="Music" />
            <Link path="/settings" linkName="Settings" />
        </nav>
    );
}

export default Navbar;