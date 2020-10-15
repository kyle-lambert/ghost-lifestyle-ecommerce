import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./StyledCart.js";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

import Topbar from "../Topbar";
import Banner from "../Banner";
import CartItem from "../CartItem";

function Cart({ closeMenu }) {
  const { shoppingCart, removeFromCart } = useShoppingCartContext();

  const handleRemoveFromCart = (cartItemId) => {
    removeFromCart(cartItemId);
  };

  return (
    <S.Wrapper>
      <span className="backdrop"></span>
      <S.Cart>
        <Topbar closeMenu={closeMenu} cart />
        <Banner cart />
        <S.List>
          {shoppingCart.map((item) => (
            <li key={item.cartItemId} className="item">
              <CartItem
                cartItem={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </li>
          ))}
        </S.List>
      </S.Cart>
    </S.Wrapper>
  );
}

export default Cart;
