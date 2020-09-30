import React from "react";
import "./CartButton.scss";

import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping_cart.svg";

function CartButton({ handleCart, cartItems }) {
  return (
    <button type="button" onClick={handleCart} className="CartButton">
      <ShoppingCart />
      {cartItems > 0 && <span>{cartItems}</span>}
    </button>
  );
}

export default CartButton;
