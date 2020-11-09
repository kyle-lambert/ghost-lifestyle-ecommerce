import React from "react";
import * as S from "./StyledCheckoutPage.js";

import Heading from "../../components/Heading";
import CheckoutForm from "../../components/CheckoutForm";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

function CheckoutPage(props) {
  const { shoppingCart, removeFromCart } = useShoppingCartContext();

  React.useEffect(() => {
    document.title = "Complete Checkout";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.CheckoutSection>
        <S.CheckoutInner>
          <S.ContactDetails>
            <Heading h3>
              Shipping <br />
              Details
            </Heading>
            <CheckoutForm />
          </S.ContactDetails>
          <S.OrderSummary>
            <Heading h3>
              Order <br /> Summary
            </Heading>
            <OrderSummary
              shoppingCart={shoppingCart}
              removeFromCart={removeFromCart}
            />
          </S.OrderSummary>
        </S.CheckoutInner>
      </S.CheckoutSection>
    </>
  );
}

export default CheckoutPage;
