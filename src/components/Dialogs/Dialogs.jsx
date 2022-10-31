import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} src={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} side={m.from} key={m.id}/>);
    let messageElement = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    }

    if (!props.isAuth) return <Navigate to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.dialogBlock}>
                    {messagesElements}
                </div>
                <div className={s.spawnMessage}>
                    <textarea className={s.spawnTextArea} placeholder='Enter your message'
                              onChange={onMessageChange} cols="60" value={messageElement}
                              rows="3"></textarea>
                    <button onClick={onSendMessageClick} className={s.spawnTextBtn}>Send</button>
                </div>
            </div>
        </div>


    )
}

export default Dialogs;