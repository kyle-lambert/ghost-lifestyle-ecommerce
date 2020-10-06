import React from "react";
import * as S from "./StyledProductCard.js";

import ImageSpacer from "../ImageSpacer";
import Heading from "../Heading";
import FavoriteToggle from "../FavoriteToggle";

function ProductCard({ product }) {
  return (
    <>
      <S.Card to={`/products/${product.id}`}>
        <ImageSpacer src={product.image} alt={product.name} />
        <S.Content>
          <Heading h4>{product.name}</Heading>
          <S.Text>{product.summary}</S.Text>
          <S.Info>
            <span className="flavour">flavour</span>
            <span className="price">{`$${product.price}`}</span>
          </S.Info>
        </S.Content>
        <span className="toggle">
          <FavoriteToggle />
        </span>
      </S.Card>
    </>
  );
}

export default ProductCard;
