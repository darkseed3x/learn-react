import React from 'react';
import style from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) =>{
    return(
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <h2 className={style.title}>Dialogs</h2>
            <div className={style.items}>
                <DialogItem name="Michael" id ="1"/>
                <DialogItem name="Lars" id ="2"/>
                <DialogItem name="Stefan" id ="3"/>
                <DialogItem name="Angelika" id ="4"/>
                <DialogItem name="Maria" id ="5"/>
            </div>
            <div className={style.messages}>
                <Message  message="aaaaaa"/>
                <Message  message="dddddd"/>
                <Message  message="ffffff"/>
                <Message  message="gggggggg"/>
            </div>
        </div>

    );
}
export default Dialogs;