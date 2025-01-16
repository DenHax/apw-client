import React from "react";
import "../../styles/Dialog.css";

const Dialog = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div className="ui-dialog-overlay">
      <div className="ui-dialog">
        <p>{message}</p>
        <button onClick={onConfirm}>Да</button>
        <button onClick={onCancel}>Нет</button>
      </div>
    </div>
  );
};

export default Dialog;
