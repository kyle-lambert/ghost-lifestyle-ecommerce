import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          <ImageSpacer src={imageURL} alt={product.name} />
        </Link>
      </S.ImageWrapper>
      <S.ContentWrapper>
        <Link to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          <S.Name>{product.name}</S.Name>
        </Link>
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
