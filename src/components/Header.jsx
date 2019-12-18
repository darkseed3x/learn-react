import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <header className="header flex-container">
            <a href="" className="logo flex-container">
                <img src="../pics/logo.svg" alt="" className="logo__logo-pic"/>
                    <div className="logo_wraper column-container">
                        <img src="../pics/logo_title.svg" alt="" className="logo__title-pic"/>
                            <h4 className="logo-title logo__logo-title logo-title_green logo-title_size_m">&nbsp;socialNet</h4>
                </div>
            </a>
        </header>
    );
}
export default Header;
