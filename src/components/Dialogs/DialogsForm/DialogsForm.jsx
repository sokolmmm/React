import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";


const DialogsForm = (props) => {
    const submitForm = (values, { setSubmitting }) => {
      props.onSendMessageClick(values.textarea);
    };
    return (
      <Formik
        initialValues={{ textarea: "", password: "" }}
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="textarea"></Field>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  export default DialogsForm;