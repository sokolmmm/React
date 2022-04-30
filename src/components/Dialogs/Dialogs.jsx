import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} />);

  let newMessageBody = state.newMessageBody;
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange} />
        </div>
        <div>
          <button onClick={onSendMessageClick}> Send </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
