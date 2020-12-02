import React from "react";
import { Link } from "react-router-dom";

import * as S from "./StyledFavoritesItem.js";

import ImageSpacer from "../ImageSpacer";
import Image from "../Image";
import Icon from "../Icon";

function FavoritesItem({ product, handleRemoveFavorite, closeMenu }) {
  const handleClick = () => {
    handleRemoveFavorite(product.id);
  };

  return (
    <>
      <S.ImageWrapper>
        <Link to={`/products/${product.slug}`} onClick={() => closeMenu()}>
          <ImageSpacer>
            {product.flavours[0] && product.flavours[0].image.url && (
              <Image src={product.flavours[0].image.url} alt={product.name} />
            )}
          </ImageSpacer>
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
