import React from "react";
import { motion } from "framer-motion";
import * as S from "./StyledCart.js";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

import Topbar from "../Topbar";
import Banner from "../Banner";
import CartItem from "../CartItem";

import { cartBackdrop, cartSlideInFromRight } from "../../animations/variants";

function Cart({ closeMenu }) {
  const { shoppingCart, removeFromCart } = useShoppingCartContext();

  const handleRemoveFromCart = (cartItemId) => {
    removeFromCart(cartItemId);
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
          <S.CheckoutLink to="/checkout" onClick={() => closeMenu()}>
            <span className="span">Checkout</span>
          </S.CheckoutLink>
        </S.Checkout>
      </S.Cart>
    </S.Wrapper>
  );
}

export default Cart;
