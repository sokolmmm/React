// eslint-disable-next-line no-unused-vars
import React from 'react';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessagetCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

let authRedirectComponent = withAuthRedirect(Dialogs);

let DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(authRedirectComponent);


export default DialogsContainer;
