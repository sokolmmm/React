import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  if(props.isAuth) {
    let path = '/profile/';
    return <Navigate to={path} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
};

export default Login;
