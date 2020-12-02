import React from "react";
import { Link } from "react-router-dom";
import * as S from "./StyledOrderSummaryProduct";

import ImageSpacer from "../../components/ImageSpacer";
import Image from "../../components/Image";

function OrderSummaryProduct({ checkoutItem, removeFromCart }) {
  const {
    cartItemId,
    product,
    options: { flavour, qty },
  } = checkoutItem;

  const handleClick = () => {
    removeFromCart(cartItemId);
  };

  return (
    <S.Container>
      <S.ImageWrapper>
        <Link to={`/products/${product.slug}`}>
          <ImageSpacer>
            {flavour && flavour.image.formats.thumbnail.url && (
              <Image
                src={flavour.image.formats.thumbnail.url}
                alt={product.name}
              />
            )}
          </ImageSpacer>
        </Link>
      </S.ImageWrapper>
      <S.ContentWrapper>
        <Link to={`/products/${product.slug}`}>
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

export default OrderSummaryProduct;
