import React from "react";
import * as S from "./StyledCart.js";

import Topbar from "../Topbar";
import Banner from "../Banner";
import CartItem from "../CartItem";

import ProteinImage from "../../assets/chips-ahoy.png";
import AminoImage from "../../assets/kiwi-strawberry.png";

function Cart({ closeMenu }) {
  return (
    <S.Wrapper>
      <span className="backdrop"></span>
      <S.Cart>
        <Topbar closeMenu={closeMenu} cart />
        <Banner cart />
        <S.List>
          {products.map((product) => (
            <li key={product.id} className="item">
              <CartItem product={product} />
            </li>
          ))}
        </S.List>
      </S.Cart>
    </S.Wrapper>
  );
}

export default Cart;

const products = [
  {
    id: 1,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
  {
    id: 2,
    name: "BCAA",
    image: AminoImage,
    flavour: "Kiwi Strawberry",
    price: 29.99,
    qty: 1,
  },
  {
    id: 3,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
];
