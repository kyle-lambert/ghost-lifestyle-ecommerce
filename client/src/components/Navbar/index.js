import React, { useState } from "react";
import * as S from "./StyledNavbar.js";

import useCartContext from "../../hooks/useCartContext";
import useFavoritesContext from "../../hooks/useFavoritesContext";

import Icon from "../Icon";
import BrandLogo from "../BrandLogo";
import Cart from "../Cart";
import Favorites from "../Favorites";

function Navbar(props) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCartContext();
  const { favorites } = useFavoritesContext();

  console.log("render");

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
            {favorites.length > 0 ? <Icon favoriteSolid /> : <Icon favoriteOutline />}
          </S.Button>
        </li>
        <li className="item">
          <S.Button onClick={() => setShowCart(true)}>
            <Icon cart />
            {cart.length > 0 && <span className="span">{cart.length}</span>}
          </S.Button>
        </li>
      </S.List>
      {showCart && <Cart closeMenu={() => setShowCart(false)} />}
      {showFavorites && <Favorites closeMenu={() => setShowFavorites(false)} />}
    </S.Header>
  );
}

export default Navbar;
