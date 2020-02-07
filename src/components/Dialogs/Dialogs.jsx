import React from 'react';
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = ()=> {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={style.dialogs}>
            <h2 className={style.title}>Dialogs</h2>
            <div className={style.items}>
                {
                    props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id ={dialog.id}/>)
                }
            </div>
            <div className={style.messages}>
                {
                    props.dialogPage.messages.map(messageItem => <Message  message={messageItem.message}/>)
                }
            </div>
            <div className={style.addMessageBlock}>
                <textarea className={style.enter} ref={newMessageElement}></textarea>
                <button className={style.button} onClick={addMessage}>send</button>
            </div>
        </div>

    );
}
export default Dialogs;