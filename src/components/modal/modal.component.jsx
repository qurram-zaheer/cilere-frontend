import React from "react";

import "./modal.styles.css";
import { useState } from "react";

const Modal = ({ handleClose, show, onSubmit }) => {
  const [newVal, setNewVal] = useState("");
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleChange = (e) => {
    setNewVal(e.target.value);
  };

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div onClick={handleClose} className="close-btn">
          <img
            src="https://img.icons8.com/fluent/24/000000/close-window.png"
            alt="close-btn"
          />
        </div>
        <div className="modal-content">
          <div>Enter new inventory level</div>
          <div>
            <input type="text" onChange={handleChange}></input>
          </div>
          <div className="save-btn" onClick={() => onSubmit(newVal)}>
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
