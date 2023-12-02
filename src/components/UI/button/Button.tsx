import { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, active, ...props }) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${active ? classes.active : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
