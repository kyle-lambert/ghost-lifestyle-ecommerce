import React from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";

import * as S from "./StyledCheckoutPage.js";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../../data/api";
import { fadeInUp } from "../../animations/variants";

import Heading from "../../components/Heading";
import CheckoutForm from "../../components/CheckoutForm";
import OrderSummary from "../../components/OrderSummary";
import AlertModal from "../../components/AlertModal";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

const stripePromise = loadStripe(
  "pk_test_51Hlmr7JNvmgYa7E8ANymBD1JTNt9dPQpDLlmxOhvBWTNHTk6UhQsP6BoQZDahOMBg7Tj2sjQjhUSuOq1wOPWXPN600hXizb5YJ"
);

function CheckoutPage(props) {
  const {
    shoppingCart,
    removeFromCart,
    total,
    clearCart,
  } = useShoppingCartContext();
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    document.title = "Complete Checkout";
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      clearCart();
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        history.push("/");
      }, 6000);
    }
    if (query.get("canceled")) {
      setShowErrorModal(true);
      setTimeout(() => {
        setShowErrorModal(false);
      }, 6000);
    }
  }, [history, clearCart]);

  const continueToPayment = async () => {
    if (shoppingCart.length > 0) {
      const stripe = await stripePromise;
      const session = await axios({
        method: "post",
        url: "/orders",
        baseURL: BASE_URL,
        data: {
          shoppingCart: [...shoppingCart],
          shippingDetails: {},
        },
      });

      const result = await stripe.redirectToCheckout({
        sessionId: session.data.id,
      });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        setShowErrorModal(true);
        setTimeout(() => {
          setShowErrorModal(false);
        }, 6000);
      }
    } else {
      console.log("You need items in your cart.");
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showSuccessModal && <AlertModal orderSuccess />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {showErrorModal && <AlertModal orderError />}
      </AnimatePresence>
      <S.CheckoutSection>
        <S.CheckoutInner>
          <S.ContactDetails
            initial="initial"
            animate="animate"
            variants={fadeInUp}>
            <Heading h3>
              Shipping <br />
              Details
            </Heading>
            <CheckoutForm continueToPayment={continueToPayment} />
          </S.ContactDetails>
          <S.OrderSummary>
            <Heading h3>
              Order <br /> Summary
            </Heading>
            <OrderSummary
              shoppingCart={shoppingCart}
              removeFromCart={removeFromCart}
              total={total}
            />
          </S.OrderSummary>
        </S.CheckoutInner>
      </S.CheckoutSection>
    </>
  );
}

export default CheckoutPage;
