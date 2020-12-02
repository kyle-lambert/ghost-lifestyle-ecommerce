import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import * as S from "./StyledCheckoutPage.js";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../../data/api";

import Heading from "../../components/Heading";
import CheckoutForm from "../../components/CheckoutForm";
import OrderSummary from "../../components/OrderSummary";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useAlertContext } from "../../contexts/AlertContext";

const stripePromise = loadStripe(
  "pk_test_51Hlmr7JNvmgYa7E8ANymBD1JTNt9dPQpDLlmxOhvBWTNHTk6UhQsP6BoQZDahOMBg7Tj2sjQjhUSuOq1wOPWXPN600hXizb5YJ"
);

const contentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function CheckoutPage(props) {
  const {
    shoppingCart,
    removeFromCart,
    total,
    clearCart,
  } = useShoppingCartContext();
  const { addAlert } = useAlertContext();
  const history = useHistory();

  React.useEffect(() => {
    document.title = "Complete Checkout";
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      history.push("/");
      clearCart();
      addAlert({
        title: "Order Completed",
        msg:
          "Your order has been submitted, we've sent the recipt to your email.",
      });
    }
    if (query.get("canceled")) {
      addAlert({
        title: "Order was Canceled",
        msg:
          "Your cart is saved and will be available when you're ready to complete your order.",
      });
    }
  }, [history, clearCart, addAlert]);

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
        addAlert({
          title: "Order Failed",
          msg:
            "Sorry, we encountered an error while trying to process your order, please try again in a few minutes.",
        });
      }
    } else {
      addAlert({
        title: "Empty Shopping Cart",
        msg:
          "Your shopping cart is empty, add some products before proceeding to checkout.",
      });
    }
  };

  return (
    <S.CheckoutSection>
      <S.ContactDetails
        initial="initial"
        animate="animate"
        variants={contentVariant}>
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
    </S.CheckoutSection>
  );
}

export default CheckoutPage;
