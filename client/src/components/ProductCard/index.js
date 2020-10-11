import React from "react";
import * as S from "./StyledProductCard.js";

import ImageSpacer from "../ImageSpacer";
import Heading from "../Heading";
import FavoriteToggle from "../FavoriteToggle";
const BASE_URL = "http://localhost:1337";

const getDefaultImageURL = (product) => {
  const { flavours } = product;
  if (Array.isArray(flavours) && flavours.length > 0) {
    return BASE_URL + flavours[0].image.url;
  } else {
    return "";
  }
};

function ProductCard({ product }) {
  const imageURL = getDefaultImageURL(product);

  const getFlavourCount = () => {
    const { flavours } = product;
    let count;
    if (Array.isArray(flavours) && flavours.length > 0) {
      count = flavours.length;
    } else {
      count = 1;
    }

    return count === 1 ? "1 Flavour" : `${count} Flavours`;
  };

  return (
    <>
      <S.Card to={`/products/${product.slug}`}>
        <S.ImageWrapper>
          <ImageSpacer src={imageURL} alt={product.name} />
        </S.ImageWrapper>
        <S.Content>
          <Heading h4>{product.name}</Heading>
          <S.Text>{product.description}</S.Text>
          <S.Price>{`$${product.price}`}</S.Price>
        </S.Content>
        <span className="toggle">
          <FavoriteToggle />
        </span>
      </S.Card>
    </>
  );
}

export default ProductCard;
