import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import * as S from "./StyledCart.js";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useAlertContext } from "../../contexts/AlertContext";

import Topbar from "../Topbar";
import Banner from "../Banner";
import CartItem from "../CartItem";

const backdropVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const menuVariant = {
  initial: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

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
      closeMenu();
      addAlert({
        title: "Empty Shopping Cart",
        msg: "Your shopping cart is empty, add some products before proceeding to checkout.",
      });
    }
  };

  return (
    <S.Wrapper>
      <motion.span
        key="span"
        initial="initial"
        animate="animate"
        variants={backdropVariant}
        className="backdrop"></motion.span>
      <S.Cart key="cart" initial="initial" animate="animate" variants={menuVariant}>
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
