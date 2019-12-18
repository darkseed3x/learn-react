import React from 'react';
import style from './Header.module.scss'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to="/profile" className={style.logo}>
                <img src="http://brend-logo.ru/assets/976fb447/images/cssp_logo.png" alt="" className={style.img} />
                <h4 className={style.title}>&nbsp;socialNet</h4>
            </NavLink>
        </header>
    );
}
export default Header;
