import { FC, HTMLInputTypeAttribute, useRef } from 'react';
import classes from './Input.module.scss'

export interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute | undefined
  name?: string | undefined;
}

const Input: FC<InputProps> = ({ label, type, name }) => {
  const inputRef = useRef(null);

  return (
    <div>
      <label>{`${label}: `} </label>
      <input className={classes.input} type={type} name={name} ref={inputRef} />
    </div>
  );
};

export default Input;
