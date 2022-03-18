import React from "react";
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessagetCreator } from "./../../redux/dialogs-reducer";
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let updateNewMessageBody = (body) => {
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  };

  let onSendMessageClick = () => {
    let action = sendMessagetCreator();
    props.store.dispatch(action);
  };

  return (<Dialogs 
    onSendMessageClick = {onSendMessageClick}
    updateNewMessageBody = {updateNewMessageBody}
    dialogsPage = {state.dialogsPage}/>);
};

export default DialogsContainer;
