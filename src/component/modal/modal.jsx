import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

export default function modal({ open, onClose, form }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <i onClick={onClose} className="close-modal fa fa-times"></i>
        <br />
        {form}
      </div>
    </>,
    document.getElementById('portal')
  );
}
