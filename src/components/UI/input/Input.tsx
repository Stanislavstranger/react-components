import React, { ForwardedRef } from 'react';
import classes from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} className={classes.input} {...props} />;
  }
);

export default Input;
