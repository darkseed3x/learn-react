import React from 'react';
import style from'./Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <a href="" className={style.logo}>
                <img src="../pics/logo.svg" alt="" className={style.img} />
                <div className={style.logo_wraper}>
                    <img src="../pics/logo_title.svg" alt=""/>
                    <h4 className={style.title}>&nbsp;socialNet</h4>
                </div>
            </a>
        </header>
    );
}
export default Header;
