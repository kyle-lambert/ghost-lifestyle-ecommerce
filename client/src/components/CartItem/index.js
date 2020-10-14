import React from "react";
import * as S from "./StyledCartItem.js";

import ImageSpacer from "../ImageSpacer";

const BASE_URL = "http://localhost:1337";

const calculateTotal = (price, qty) => {
  const total = price * qty;
  return `$${total}`;
};

function CartItem({ cartItem, handleRemoveFromCart }) {
  const { cartItemId, product, flavour, qty, price } = cartItem;

  const handleClick = () => {
    handleRemoveFromCart(cartItemId);
  };

  return (
    <>
      <S.ImageWrapper>
        {flavour && <ImageSpacer src={BASE_URL + flavour.image.url} alt={product.name} />}
      </S.ImageWrapper>
      <S.ContentWrapper>
        <div className="product">
          <S.Name>{product.name}</S.Name>
          <S.Text>{flavour.name}</S.Text>
        </div>
        <button onClick={handleClick} type="button" className="button">
          Remove
        </button>
      </S.ContentWrapper>
      <S.InfoWrapper>
        <S.Price>${price}</S.Price>
        <S.Qty>{qty}</S.Qty>
      </S.InfoWrapper>
    </>
  );
}

export default CartItem;
