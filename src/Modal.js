import { CircleX } from 'lucide-react';
import React from 'react';



const Modal = ({ show, onClose, children }) => {
  if (!show) return null;  // Don't render modal if 'show' is false

  const handleClose = (e) => {
    if (e.target.localName === 'div' && !e.target.className) onClose();
  };

  return (
    <div style={styles.overlay} onClick={handleClose} >
      <div style={styles.modal}>
        <CircleX onClick={onClose} style={styles.closeButton} />
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '8px',
    width: '600px',
    Height: '674px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#C9CED7',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Modal;
