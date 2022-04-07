import React from "react";
import {updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {sendMessagetCreator} from "./../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      let action = sendMessagetCreator();
      dispatch(action);
    },
    updateNewMessageBody: (body) => {
      let action = updateNewMessageBodyCreator(body);
      dispatch(action);
    },
  };
};

let DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;