import React from "react";
import * as S from "./StyledCheckoutForm.js";

import FormInput from "../../components/FormInput";

function CheckoutForm({ continueToPayment }) {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postalCode: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    continueToPayment();
  };

  return (
    <S.Form>
      <div className="fname">
        <FormInput
          label="First Name"
          name="firstName"
          value={state.firstName}
          handleChange={handleChange}
        />
      </div>
      <div className="lname">
        <FormInput
          label="Last Name"
          name="lastName"
          value={state.lastName}
          handleChange={handleChange}
        />
      </div>
      <div className="email">
        <FormInput
          label="Email"
          name="email"
          value={state.email}
          handleChange={handleChange}
        />
      </div>
      <div className="address">
        <FormInput
          label="Address"
          name="address"
          value={state.address}
          handleChange={handleChange}
        />
      </div>
      <div className="postalCode">
        <FormInput
          label="Postal Code"
          name="postalCode"
          value={state.postalCode}
          handleChange={handleChange}
        />
      </div>
      <div className="state">
        <FormInput
          label="State"
          name="state"
          value={state.state}
          handleChange={handleChange}
        />
      </div>
      <div className="city">
        <FormInput
          label="City"
          name="city"
          value={state.city}
          handleChange={handleChange}
        />
      </div>
      <div className="country">
        <FormInput
          label="Country"
          name="country"
          value={state.country}
          handleChange={handleChange}
        />
      </div>
      <div className="submit">
        <S.PurchaseButton onClick={handleClick}>
          <span className="span">Continue to Payment</span>
        </S.PurchaseButton>
      </div>
    </S.Form>
  );
}

export default CheckoutForm;
