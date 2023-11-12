import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, active, ...props }) => {
  return (
    <button
      {...props}
      className={`${classes.btn} ${active ? classes.active : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
