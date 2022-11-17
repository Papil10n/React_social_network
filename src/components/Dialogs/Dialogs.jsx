import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Navigate} from "react-router-dom";
import {Textarea} from "../common/Forms/Forms";
import {maxLengthCreator, required} from "../../utils/Validators/validator";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} side={m.from} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.messageElement);

    }

    if (!props.isAuth) return <Navigate to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.dialogBlock}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.spawnMessage}>
            <Field component={Textarea} validate={[required, maxLength50]} className={s.spawnTextArea} name="messageElement"
                   placeholder='Enter your message'
                   cols="60" rows="3"/>
            <button className={s.spawnTextBtn}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(AddMessageForm)

export default Dialogs;