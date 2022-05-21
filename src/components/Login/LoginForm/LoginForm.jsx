import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./LoginForm.style.css";
import TextError from "../../common/FormsControls/TextError";

const LoginForm = (props) => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const { email, password, rememberMe } = values;
    props.loginOnSubmit(email, password, rememberMe);    
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div>{formik.status}</div>
            <div className="formControl">
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="formControl">
              <label htmlFor="password">password</label>
              <Field type="text" id="password" name="password" />
              <ErrorMessage name="password" component={TextError} />
            </div>

            <div className="formControl">
              <label htmlFor="rememberMe">rememberMe</label>
              <Field type="checkbox" id="rememberMe" name="rememberMe" />
            </div>

            <button type="submit"> Login </button>
          

            <div>{props.responceError ? props.responceError : null}</div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
