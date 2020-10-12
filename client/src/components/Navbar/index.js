import React, { useState } from "react";
import * as S from "./StyledNavbar.js";

import Icon from "../Icon";
import BrandLogo from "../BrandLogo";
import Cart from "../Cart";
import Favorites from "../Favorites";

import { useStore } from '../../contexts/StoreContext';

function Navbar(props) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [state] = useStore();

  return (
    <S.Header>
      <S.Nav>shop</S.Nav>
      <S.Logo to="/">
        <BrandLogo />
      </S.Logo>
      <S.List>
        <li className="item">
          <S.Button>
            <Icon person />
          </S.Button>
        </li>
        <li className="item">
          <S.Button onClick={() => setShowFavorites(true)}>
            {state.favorites.length > 0 ? (
              <Icon favoriteSolid />
            ) : (
              <Icon favoriteOutline />
            )}
          </S.Button>
        </li>
        <li className="item">
          <S.Button onClick={() => setShowCart(true)}>
            <Icon cart />
            <span className="span">{5}</span>
          </S.Button>
        </li>
      </S.List>
      {showCart && <Cart closeMenu={() => setShowCart(false)} />}
      {showFavorites && <Favorites closeMenu={() => setShowFavorites(false)} />}
    </S.Header>
  );
}

export default Navbar;
