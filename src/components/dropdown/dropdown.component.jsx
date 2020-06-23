import React, { useState, useEffect } from "react";

import "./dropdown.styles.css";

const Dropdown = (props) => {
  const [itemList, setItemList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { setSelected } = props;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/product-list");
      const data = await res.json();
      setSelected([data[0]]);
      return setItemList(data);
    };
    fetchData();
  }, [setSelected]);

  const handleClick = (product_id) => {
    const checker = props.selected.findIndex(
      (item) => item.product_id === product_id
    );

    if (checker === -1) {
      const foundItem = itemList.find((item) => item.product_id === product_id);
      return props.setSelected([...props.selected, foundItem]);
    }
    const newSelected = props.selected.filter(
      (item) => item.product_id !== product_id
    );
    return props.setSelected(newSelected);
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
      {console.log(props.selected)}
    </div>
  );
};

export default Dropdown;
