import React from "react";
import { Switch, Route } from "react-router-dom";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Home from "../../pages/Home";
import Products from "../../pages/Products";

function App(props) {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </main>
      <Footer />
      <Banner copyright />
    </>
  );
}

export default App;
