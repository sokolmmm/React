// eslint-disable-next-line no-unused-vars
import React from "react";
import { sendMessagetCreator } from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSendMessageClick: (newMessageBody) => {
    dispatch(sendMessagetCreator(newMessageBody));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
