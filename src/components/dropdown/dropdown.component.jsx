import React, { useState } from "react";

import "./dropdown.styles.css";

const Dropdown = ({ itemList, selected, setSelected }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Logic and state management for selecting items.
  const handleClick = (product_id) => {
    const checker = selected.findIndex(
      (item) => item.product_id === product_id
    );

    // If item is already selected, then unselect
    if (checker === -1) {
      const foundItem = itemList.find((item) => item.product_id === product_id);
      return setSelected([...selected, foundItem]);
    }
    const newSelected = selected.filter(
      (item) => item.product_id !== product_id
    );

    //else, add to selected array for chart and table rendering
    return setSelected(newSelected);
  };

  return (
    <div
      className="dropdown-container"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div>Click here for details</div>
      {showDropdown ? (
        <div className="dropdown">
          {itemList.length > 1
            ? itemList.map((item) => (
                <div
                  key={item.product_id}
                  className="dd-item"
                  onClick={() => handleClick(item.product_id)}
                >
                  {item.product_name}
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
