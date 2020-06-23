import React, { useState, useEffect } from "react";

import { data } from "./dropdown.data";

const Dropdown = (props) => {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    setItemList(data);
  }, []);
  const optionItems = itemList.map((item) => (
    <option key={item.product_id}>{item.product_name}</option>
  ));

  return (
    <div>
      <select onChange={(e) => console.log(e)}>{optionItems}</select>
    </div>
  );
};

export default Dropdown;
