import React from 'react';
import style from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const Dialogs = () =>{
    return(
        <div className={style.dialogs}>
            <h2 className={style.title}>Dialogs</h2>
            <div className={style.items}>
                <div className={style.dialog}>
                    <NavLink to="dialogs/1">Michael</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="dialogs/2">Lars</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="dialogs/3">Stefan</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="dialogs/4">Angelika</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="dialogs/5">Maria</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>aaaaaaa</div>
                <div className={style.message}>dddddd</div>
                <div className={style.message}>ffffff</div>
                <div className={style.message}>gggggggg</div>
            </div>
        </div>

    );
}
export default Dialogs;