import React from "react";
import "./App.scss";

import PromoBanner from "../PromoBanner";
import Header from "../Header";

function App(props) {
  return (
    <div className="App">
      <PromoBanner />
      <Header />
    </div>
  );
}

export default App;
