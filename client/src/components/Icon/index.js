import React from "react";
import { ReactComponent as Cart } from "../../assets/icons/shopping_cart.svg";
import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";
import { ReactComponent as FavoriteOutline } from "../../assets/icons/favorite_outline.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";

import * as S from "./StyledIcon.js";

function Icon({ cart, close, favoriteSolid, favoriteOutline }) {
  if (cart) {
    return (
      <S.Wrapper>
        <Cart />
      </S.Wrapper>
    );
  }
  if (close) {
    return (
      <S.Wrapper>
        <Close />
      </S.Wrapper>
    );
  }
  if (favoriteSolid) {
    return (
      <S.Wrapper>
        <FavoriteSolid />
      </S.Wrapper>
    );
  }
  if (favoriteOutline) {
    return (
      <S.Wrapper>
        <FavoriteOutline />
      </S.Wrapper>
    );
  }
  return (
    <S.Wrapper>
      <Person />
    </S.Wrapper>
  );
}

export default Icon;
