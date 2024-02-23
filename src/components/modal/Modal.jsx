import React from "react";
import Project from "../layout/Project/Project";
import "./Modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Project />
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
