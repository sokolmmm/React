import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  if(props.isAuth) {
    return <Navigate to={`/profile/${props.id}`} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
};

export default Login;
