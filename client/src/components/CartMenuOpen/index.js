import React from "react";
import "./CartMenuOpen.scss";

import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping_cart.svg";

function CartMenuOpen({ handleOpen, cartItems }) {
  return (
    <button type="button" onClick={handleOpen} className="CartMenuOpen">
      <ShoppingCart />
      {cartItems > 0 && <span>{cartItems}</span>}
    </button>
  );
}

export default CartMenuOpen;
