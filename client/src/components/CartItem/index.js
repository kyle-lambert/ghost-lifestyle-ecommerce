import React from "react";
import * as S from "./StyledCartItem.js";

import ImageSpacer from "../ImageSpacer";

function CartItem({ product }) {
  return (
    <>
      <S.ImageWrapper>
        <ImageSpacer src={product.image} alt={product.name} />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <div className="product">
          <S.Name>{product.name}</S.Name>
          <S.Text>{product.flavour}</S.Text>
        </div>
        <button type="button" className="button">
          Remove
        </button>
      </S.ContentWrapper>
      <S.InfoWrapper>
        <S.Price>${product.price}</S.Price>
        <S.Qty>{product.qty}</S.Qty>
      </S.InfoWrapper>
    </>
  );
}

export default CartItem;
