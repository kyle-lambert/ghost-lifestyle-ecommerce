import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../../pages/HomePage";
import ShoppingPage from "../../pages/ShoppingPage";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import AlertModal from "../../components/AlertModal";
import { useAlertContext } from "../../contexts/AlertContext";
import Error from "../Error";

function App(props) {
  const { alert } = useAlertContext();

  return (
    <>
      <AnimatePresence>
        {alert && <AlertModal title={alert.title} msg={alert.msg} />}
      </AnimatePresence>
      <Banner />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ShoppingPage} />
        <Route exact path="/products/:slug" component={ProductPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route>
          <Error
            title="404 Not Found"
            msg="Sorry, the page you're looking for doesn't exist."
          />
        </Route>
      </Switch>
      <Footer />
      <Banner copyright />
    </>
  );
}

export default App;
