import React from 'react';
import style from './Message.module.scss';


const Message = (props) =>{
    return(
        <div className={style.message}>
            <div className={style.avatar}>AB</div>
            <div className={style.text}>{props.message}</div>
        </div>
    );
}


export default Message;