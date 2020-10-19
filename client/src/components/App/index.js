import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import ShoppingPage from "../../pages/ShoppingPage";
import ProductPage from "../../pages/ProductPage";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import UserModal from "../../components/UserModal";

function App(props) {
  // const location = useLocation();
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <Banner />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ShoppingPage} />
        <Route exact path="/products/:slug" component={ProductPage} />
        <Route exact path="/404">
          <div>404 page</div>
        </Route>
      </Switch>
      <Footer />
      <Banner copyright />
    </>
  );
}

export default App;
