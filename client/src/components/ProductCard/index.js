import React from "react";
import * as S from "./StyledProductCard.js";

import ImageSpacer from "../ImageSpacer";
import Heading from "../Heading";
import FavoriteToggle from "../FavoriteToggle";

import { fadeInCard } from "../../animations/variants";

function ProductCard({ product }) {
  return (
    <S.Wrapper initial="initial" animate="animate" variants={fadeInCard}>
      <S.Card to={`/products/${product.slug}`}>
        <S.ImageWrapper>
          <ImageSpacer src={product.flavours[0].image.url} alt={product.name} />
        </S.ImageWrapper>
        <S.Content>
          <Heading h4>{product.name}</Heading>
          <p className="description">{product.description}</p>
        </S.Content>
      </S.Card>
      <span className="toggle">
        <FavoriteToggle product={product} />
      </span>
    </S.Wrapper>
  );
}

export default ProductCard;
