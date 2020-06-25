import React, { useState } from "react";
import axios from "axios";

import "./table.styles.css";
import Modal from "../modal/modal.component";

const Table = (props) => {
  const [editMode, toggleEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEditClick = (id) => {
    setEditId(id);
    toggleEditMode(true);
  };

  /* -------------------------------------------------------------------------- */
  /*        Send request to backend, and update frontend with new values        */
  /*        when the save button is clicked                                     */
  /* -------------------------------------------------------------------------- */

  const updateItem = async (newVal) => {
    const presentSelected = props.selected;
    console.log("HERE", newVal);
    await axios
      .post(`http://localhost:5000/edit-product/${editId}`, {
        newVal,
      })
      .then((res) => {
        const selectedItemUpdate = res.data.find(
          (item) => item.product_id === editId
        );
        const presentIndex = presentSelected.findIndex(
          (item) => item.product_id === editId
        );
        presentSelected[presentIndex] = selectedItemUpdate;
        props.setSelected(presentSelected);
        return props.updateItemList(res.data);
      });

    return toggleEditMode(false);
  };

  return (
    <div className="table">
      {/* Conditionally rendered editing modal */}
      <Modal
        show={editMode}
        handleClose={() => {
          toggleEditMode(false);
        }}
        onSubmit={updateItem}
      ></Modal>
      <div className="table-row table-header">
        <div>Product ID</div>
        <div>Product Name</div>
        <div>Inventory Level</div>
        <div>Product Date</div>
      </div>

      {props.selected.length >= 1
        ? props.selected.map((item) => {
            const { inv_data } = item;
            const last_val = inv_data[inv_data.length - 1]["inventoryVal"];
            let last_date = new Date(
              parseInt(inv_data[inv_data.length - 1]["date"])
            );
            last_date = `${last_date.getMonth()}/${last_date.getDate()}`;
            return (
              <div className="table-row" key={item.product_id}>
                <div>{item.product_id}</div>
                <div>{item.product_name}</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {last_val}{" "}
                  <div
                    className="edit-btn"
                    onClick={() => handleEditClick(item.product_id)}
                  >
                    <img
                      src="https://img.icons8.com/cotton/16/000000/edit--v1.png"
                      alt="edit-btn"
                    />
                  </div>
                </div>
                <div>{last_date}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Table;
