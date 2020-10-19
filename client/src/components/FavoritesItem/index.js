import React from "react";

import * as S from "./StyledFavoritesItem.js";

import ImageSpacer from "../ImageSpacer";
import Icon from "../Icon";

import { generateURL } from "../../utils";

function FavoritesItem({ product, handleRemoveFavorite, closeMenu }) {
  const imageURL = generateURL(product);

  const handleClick = () => {
    handleRemoveFavorite(product.id);
  };

  return (
    <>
      <S.ImageWrapper>
        <ImageSpacer src={imageURL} alt={product.name} />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.Name to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          {product.name}
        </S.Name>
        <S.Text>{product.flavour}</S.Text>
      </S.ContentWrapper>
      <S.InfoWrapper>
        <button onClick={handleClick} type="button" className="button">
          <Icon remove />
        </button>
      </S.InfoWrapper>
    </>
  );
}

export default FavoritesItem;
