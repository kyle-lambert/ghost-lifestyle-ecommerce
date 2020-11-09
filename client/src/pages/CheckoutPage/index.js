import React from "react";
import * as S from "./StyledCheckoutPage.js";

import Heading from "../../components/Heading";
import CheckoutForm from "../../components/CheckoutForm";

function CheckoutPage(props) {
  return (
    <>
      <S.CheckoutSection>
        <S.CheckoutInner>
          <S.ContactDetails>
            <Heading h3>Contact Details</Heading>
            <CheckoutForm />
          </S.ContactDetails>
          <S.OrderSummary>
            <Heading h3>Order Summary</Heading>
          </S.OrderSummary>
        </S.CheckoutInner>
      </S.CheckoutSection>
    </>
  );
}

export default CheckoutPage;
