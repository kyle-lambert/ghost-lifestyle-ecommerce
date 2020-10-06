import React from "react";
import * as S from "./StyledFavoritesItem.js";

import ImageSpacer from "../ImageSpacer";
import Icon from "../Icon";

function FavoritesItem({ product, removeFavoriteById }) {
  const handleClick = (e) => {
    removeFavoriteById(product.id);
  };

  return (
    <>
      <S.ImageWrapper>
        <ImageSpacer src={product.image} alt={product.name} />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.Name>{product.name}</S.Name>
        <S.Text>{product.flavour}</S.Text>
      </S.ContentWrapper>
      <S.InfoWrapper>
        <button onClick={handleClick} type="button" className="button">
          <Icon favoriteSolid />
        </button>
      </S.InfoWrapper>
    </>
  );
}

export default FavoritesItem;
