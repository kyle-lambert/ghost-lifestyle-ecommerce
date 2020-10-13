import React from "react";
import * as S from "./StyledFavorites.js";

import useFavoritesContext from "../../hooks/useFavoritesContext";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";
import Banner from "../Banner";

function Favorites({ closeMenu }) {
  const { favorites, removeFavorite } = useFavoritesContext()

  const handleRemoveFavorite = (id) => {
    const index = favorites.findIndex(cur => cur.id === id)
    if (index !== -1) {
      removeFavorite(id)
    }
  }

  return (
    <S.Wrapper>
      <span className="backdrop"></span>
      <S.Favorites>
        <Topbar closeMenu={closeMenu} favorites />
        <Banner cart />
        <S.List>
          {favorites.map((favorite) => (
            <li key={favorite.id} className="item">
              <FavoritesItem product={favorite} handleRemoveFavorite={handleRemoveFavorite} />
            </li>
          ))}
        </S.List>
      </S.Favorites>
    </S.Wrapper>
  );
}

export default Favorites;
