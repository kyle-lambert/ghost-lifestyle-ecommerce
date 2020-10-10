import React from "react";
import { Switch, Route } from "react-router-dom";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import DetailsPage from "../../pages/DetailsPage";

function App(props) {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/products/:slug" component={DetailsPage} />
          <Route exact path="/404">
            <div>404 page</div>
          </Route>
        </Switch>
      </main>
      <Footer />
      <Banner copyright />
    </>
  );
}

export default App;
