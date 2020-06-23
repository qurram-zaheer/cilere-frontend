import React, { useState } from "react";

import "./App.css";
import Dropdown from "./components/dropdown/dropdown.component";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <header className="App-header"></header>
      <Dropdown setSelected={setSelected} />
    </div>
  );
}

export default App;
