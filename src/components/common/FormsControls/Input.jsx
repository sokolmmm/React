import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError'

const Input = (props) => {
    const {label, name, className, ...rest} = props;

  return (
    <div className={'style.'+className}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input