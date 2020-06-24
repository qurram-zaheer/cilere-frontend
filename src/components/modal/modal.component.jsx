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
        <div onClick={handleClose}>X</div>
        <div>
          <div>Enter new inventory level</div>
          <div>
            <input type="text" onChange={handleChange}></input>
          </div>
          <div onClick={() => onSubmit(newVal)}>SAVE</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
