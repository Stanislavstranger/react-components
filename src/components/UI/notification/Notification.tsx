import React, { ReactNode } from 'react';
import classes from './Notification.module.css';

interface NotificationProps {
  children: ReactNode;
}

const Notification: React.FC<NotificationProps> = ({ children }) => {
  return <div className={classes.notification}>{children}</div>;
};

export default Notification;
