import React from 'react';
import classes from './Modal.module.css';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ photoSrc, onClose }) => {

  return (
    <div className={classes.modal} onClick={onClose}>
      <img className={classes.photo} src={photoSrc} alt="Selected photo" />
      <CloseIcon
        onClick={onClose}
      />
    </div>
  );
};

export default Modal;
