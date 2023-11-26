import React, { ReactNode } from 'react';
import classes from './Notification.module.css';

interface NotificationProps {
  children: ReactNode;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.notification}>{children}</div>
        <button className={classes.btn_close} onClick={onClose}>
          x
        </button>
      </div>
    </>
  );
};

export default Notification;
