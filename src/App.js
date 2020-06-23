import React, { useState } from "react";

import "./App.css";
import Dropdown from "./components/dropdown/dropdown.component";
import Table from "./components/table/table.component";
import Chart from "./components/chart/chart.component";

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Dropdown setSelected={setSelected} selected={selected} />
      <Chart selected={selected} />
      <Table selected={selected} />
    </div>
  );
}

export default App;
