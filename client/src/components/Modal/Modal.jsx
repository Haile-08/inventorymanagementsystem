import React from "react";
import "../../App.css";

function Modal({ shouldShow, onRequestClose, children }) {
  return shouldShow ? (
    <div className="modal" onClick={onRequestClose}>
      <div
        className="modal-base"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="btn" onClick={onRequestClose}>
          X
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  ) : null;
}

export default Modal;