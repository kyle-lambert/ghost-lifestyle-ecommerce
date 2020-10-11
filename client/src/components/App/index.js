import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import DetailsPage from "../../pages/DetailsPage";

const Main = styled.main`
  min-height: 100vh;
`;

function App(props) {
  return (
    <>
      <Banner />
      <Navbar />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/products/:slug" component={DetailsPage} />
          <Route exact path="/404">
            <div>404 page</div>
          </Route>
        </Switch>
      </Main>
      <Footer />
      <Banner copyright />
    </>
  );
}

export default App;
