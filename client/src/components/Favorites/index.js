import React from "react";
import * as S from "./StyledFavorites.js";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";
import Banner from "../Banner";

import { useStore } from "../../contexts/StoreContext";

function Favorites({ closeMenu }) {
  const [state, dispatch] = useStore();

  const removeFavorite = (id) => {
    const index = state.favorites.findIndex(cur => cur.id === id)
    if (index !== -1) {
      dispatch({type: useStore.types.REMOVE_FAVORITE, payload: index})
    }
  }

  return (
    <S.Wrapper>
      <span className="backdrop"></span>
      <S.Favorites>
        <Topbar closeMenu={closeMenu} favorites />
        <Banner cart />
        <S.List>
          {state.favorites.map((favorite) => (
            <li key={favorite.id} className="item">
              <FavoritesItem product={favorite} removeFavorite={removeFavorite} />
            </li>
          ))}
        </S.List>
      </S.Favorites>
    </S.Wrapper>
  );
}

export default Favorites;
