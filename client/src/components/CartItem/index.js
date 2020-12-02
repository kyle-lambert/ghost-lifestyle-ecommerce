import React from "react";
import { Link } from "react-router-dom";
import * as S from "./StyledCartItem.js";

import ImageSpacer from "../ImageSpacer";
import Image from "../Image";

function CartItem({ cartItem, handleRemoveFromCart, closeMenu }) {
  const {
    cartItemId,
    product,
    options: { flavour, qty },
  } = cartItem;

  const handleClick = () => {
    handleRemoveFromCart(cartItemId);
  };

  return (
    <S.Container>
      <S.ImageWrapper>
        <Link to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          <ImageSpacer>
            {flavour && flavour.image.url && (
              <Image src={flavour.image.url} alt={product.name} />
            )}
          </ImageSpacer>
        </Link>
      </S.ImageWrapper>
      <S.ContentWrapper>
        <Link to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          <S.Name>{product.name}</S.Name>
        </Link>
        <S.Text>{flavour.name}</S.Text>
        <button onClick={handleClick} type="button" className="button">
          Remove
        </button>
      </S.ContentWrapper>
      <S.InfoWrapper>
        <S.Price>${product.price}</S.Price>
        <S.Qty>{qty}</S.Qty>
      </S.InfoWrapper>
    </S.Container>
  );
}

export default CartItem;
