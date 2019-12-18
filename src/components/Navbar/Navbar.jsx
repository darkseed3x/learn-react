import React from 'react';
import style from'./Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to="/profile" activeClassName={style.active} className={style.link}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={style.active} className={style.link}>Messages</NavLink>
            <NavLink to="/news" activeClassName={style.active} className={style.link}>News</NavLink>
            <NavLink to="/music" activeClassName={style.active} className={style.link}>Music</NavLink>
            <NavLink to="/settings" activeClassName={style.active} className={style.link}>Settings</NavLink>
        </nav>
    );
}
export default Navbar;