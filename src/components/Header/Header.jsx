import React from 'react';
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <a href="" className={style.logo}>
                <img src="http://brend-logo.ru/assets/976fb447/images/cssp_logo.png" alt="" className={style.img} />
                <h4 className={style.title}>&nbsp;socialNet</h4>
            </a>
        </header>
    );
}
export default Header;
