import { ReactNode } from 'react';
import classes from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  setVisible: (visible: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
