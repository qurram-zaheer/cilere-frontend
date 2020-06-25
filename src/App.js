import React, { useState, useEffect } from "react";

import "./App.css";
import Dropdown from "./components/dropdown/dropdown.component";
import Table from "./components/table/table.component";
import Chart from "./components/chart/chart.component";

function App() {
  const [selected, setSelected] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/product-list");
      const data = await res.json();
      setSelected([data[0]]);
      return setItemList(data);
    };
    fetchData();
  }, [setSelected]);

  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dropdown
          setSelected={setSelected}
          selected={selected}
          itemList={itemList}
        />
        <Chart selected={selected} />
        <Table
          updateItemList={setItemList}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div className="footer">
        <a href="https://icons8.com/">Close, Edit Window icon by Icons8</a>
      </div>
    </div>
  );
}

export default App;
