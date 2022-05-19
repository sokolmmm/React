import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const postValidate = (values) => {
  const errors = {};
  if (!values.textarea) {
    errors.textarea = "Required";
  }
  return errors;
};


const AddNewPostForm = (props) => {
  const submitForm = (values, { setSubmitting }) => {
    props.addPost(values.textarea);
  };
  return (
    <Formik
      initialValues={{ textarea: "",}}
      onSubmit={submitForm}
      validate={postValidate}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field name="textarea" type='text' as='textarea'></Field>
            <ErrorMessage name="textarea" component="div" />
          </div>
          <div>
            <button type="submit" /*disabled={isSubmitting}*/>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewPostForm;