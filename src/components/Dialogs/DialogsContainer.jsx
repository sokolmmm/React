import React from "react";
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../store-context";
import { sendMessagetCreator } from "./../../redux/dialogs-reducer";
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
return (
  <StoreContext.Consumer>
    {store => {
      let state = store.getState();
    
      let updateNewMessageBody = (body) => {
        let action = updateNewMessageBodyCreator(body);
        store.dispatch(action);
      };

      let onSendMessageClick = () => {
        let action = sendMessagetCreator();
        store.dispatch(action);
      };
      return (
        <Dialogs 
        onSendMessageClick = {onSendMessageClick}
        updateNewMessageBody = {updateNewMessageBody}
        dialogsPage = {state.dialogsPage}/>
      )
    }
  }
  </StoreContext.Consumer>
)
};

export default DialogsContainer;
