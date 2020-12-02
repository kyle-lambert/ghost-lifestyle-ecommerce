import React from "react";
import * as S from "./StyledProductCard.js";

import ImageSpacer from "../ImageSpacer";
import Image from "../Image";
import Heading from "../Heading";
import FavoriteToggle from "../FavoriteToggle";

const cardVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function ProductCard({ product }) {
  return (
    <S.Wrapper initial="initial" animate="animate" variants={cardVariant}>
      <S.Card to={`/products/${product.slug}`}>
        <S.ImageWrapper>
          <ImageSpacer>
            {product.flavours[0] && product.flavours[0].image.url && (
              <Image src={product.flavours[0].image.url} alt={product.name} />
            )}
          </ImageSpacer>
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
