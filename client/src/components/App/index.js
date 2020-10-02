import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import PromoBanner from "../PromoBanner";
import Header from "../Header";
import Footer from "../Footer";
import CopyrightBanner from "../CopyrightBanner";

import Home from "../../pages/Home";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";

import { FavoritesProvider } from "../../contexts/FavoritesContext";

function App(props) {
  return (
    <FavoritesProvider>
      <div className="App">
        <PromoBanner />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
        </Switch>
        <Footer />
        <CopyrightBanner />
      </div>
    </FavoritesProvider>
  );
}

export default App;
