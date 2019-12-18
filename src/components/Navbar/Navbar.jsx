import React from 'react';
import style from'./Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <a href="" className={style.link}>Profile</a>
            <a href="" className={style.link}>Messages</a>
            <a href="" className={style.link}>News</a>
            <a href="" className={style.link}>Music</a>
            <a href="" className={style.link}>Settings</a>
        </nav>
    );
}
export default Navbar;