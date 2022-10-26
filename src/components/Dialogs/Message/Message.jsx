import s from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.messageItem}>
            <div className={props.side === "mate" ? s.mySide : s.mateSide }>
                <span>
                    {props.message}
                </span>
            </div>
        </div>
    )
}

export default Message;