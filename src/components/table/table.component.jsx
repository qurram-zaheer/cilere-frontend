import React, { useState } from "react";

import "./table.styles.css";

const Table = (props) => {
  const [editMode, toggleEditMode] = useState(false);

  return (
    <div className="table">
      <div className="table-row table-header">
        <div>Product ID</div>
        <div>Product Name</div>
        <div>Product Inventory Level</div>
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
              <div className="table-row">
                <div>{item.product_id}</div>
                <div>{item.product_name}</div>
                <div>{last_val}</div>
                <div>{last_date}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Table;
