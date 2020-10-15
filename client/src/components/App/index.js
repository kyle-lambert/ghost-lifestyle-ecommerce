import React from "react";
import { Switch, Route } from "react-router-dom";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import HomePage from "../../pages/HomePage";
import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";

import { ShoppingCartProvider } from "../../contexts/ShoppingCartContext";
import { FavoritesProvider } from "../../contexts/FavoritesContext";

function App(props) {
  return (
    <>
      <FavoritesProvider>
        <ShoppingCartProvider>
          <Banner />
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products" component={CategoryPage} />
              <Route exact path="/products/:slug" component={ProductPage} />
              <Route exact path="/404">
                <div>404 page</div>
              </Route>
            </Switch>
          </main>
          <Footer />
          <Banner copyright />
        </ShoppingCartProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
