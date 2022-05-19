import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  loginOnSubmit = (email, password, rememberMe) => {
    this.props.login(email, password, rememberMe);
  };
  render() {
    return <Login loginOnSubmit={this.loginOnSubmit} {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id,
});

export default connect(mapStateToProps, { login })(LoginContainer);
