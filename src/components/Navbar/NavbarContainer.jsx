import React from "react";
import { logout } from "../../redux/auth-reducer";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class NavbarContainer extends React.Component {
  render() {
    return <Navbar {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { logout }),
  withAuthRedirect
)(NavbarContainer);
