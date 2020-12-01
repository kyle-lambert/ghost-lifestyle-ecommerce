import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import * as S from "./StyledCart.js";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useAlertContext } from "../../contexts/AlertContext";

import Topbar from "../Topbar";
import Banner from "../Banner";
import CartItem from "../CartItem";

import { cartBackdrop, cartSlideInFromRight } from "../../animations/variants";

function Cart({ closeMenu }) {
  const history = useHistory();
  const { shoppingCart, removeFromCart } = useShoppingCartContext();
  const { addAlert } = useAlertContext();

  const handleRemoveFromCart = (cartItemId) => {
    removeFromCart(cartItemId);
  };

  const handleNavigateToCheckout = () => {
    if (shoppingCart.length > 0) {
      history.push("/checkout");
      closeMenu();
    } else {
      addAlert({
        title: "Empty Shopping Cart",
        msg:
          "Your shopping cart is empty, add some products before proceeding to checkout.",
      });
    }
  };

  return (
    <S.Wrapper>
      <motion.span
        initial="initial"
        animate="animate"
        exit="initial"
        variants={cartBackdrop}
        className="backdrop"></motion.span>
      <S.Cart
        initial="initial"
        animate="animate"
        exit="initial"
        variants={cartSlideInFromRight}>
        <Topbar closeMenu={closeMenu} cart />
        <Banner cart />
        <S.List>
          {shoppingCart.map((item) => (
            <CartItem
              key={item.cartItemId}
              cartItem={item}
              closeMenu={closeMenu}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </S.List>
        <S.Checkout>
          <S.CheckoutButton onClick={handleNavigateToCheckout}>
            <span className="span">Checkout</span>
          </S.CheckoutButton>
        </S.Checkout>
      </S.Cart>
    </S.Wrapper>
  );
}

export default Cart;
