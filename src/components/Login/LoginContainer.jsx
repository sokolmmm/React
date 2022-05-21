import React from "react";
import { connect } from "react-redux";
import { getAuthUserData, login } from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  loginOnSubmit = (email, password, rememberMe) => {
    this.props.login(email, password, rememberMe);
  };
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Login loginOnSubmit={this.loginOnSubmit} {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id,
  responceError: state.auth.responceError,
});

export default connect(mapStateToProps, { login, getAuthUserData })(
  LoginContainer
);
