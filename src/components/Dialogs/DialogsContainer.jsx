// eslint-disable-next-line no-unused-vars
import React from 'react';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessagetCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

