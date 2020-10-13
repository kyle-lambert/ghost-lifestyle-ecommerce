import React from "react";
import * as S from "./StyledCart.js";

import useCartContext from '../../hooks/useCartContext';

import Topbar from "../Topbar";
import Banner from "../Banner";
import CartItem from "../CartItem";


function Cart({ closeMenu }) {
  const { cart, removeFromCart } = useCartContext();

  return (
    <S.Wrapper>
      <span className="backdrop"></span>
      <S.Cart>
        <Topbar closeMenu={closeMenu} cart />
        <Banner cart />
        <S.List>
          {cart.map((item) => (
            <li key={item.id} className="item">
              <CartItem product={item} />
            </li>
          ))}
        </S.List>
      </S.Cart>
    </S.Wrapper>
  );
}

export default Cart;
