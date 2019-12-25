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

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <h2 className={style.title}>Dialogs</h2>
            <div className={style.items}>
                {
                    props.dialogs.map(dialog => <DialogItem name={dialog.name} id ={dialog.id}/>)
                }
            </div>
            <div className={style.messages}>
                {
                    props.messages.map(messageItem => <Message  message={messageItem.message}/>)
                }
            </div>
        </div>

    );
}
export default Dialogs;