import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "./StyledNavbar.js";

import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useFavoritesContext } from "../../contexts/FavoritesContext";

import Icon from "../Icon";
import BrandLogo from "../BrandLogo";
import Cart from "../Cart";
import Favorites from "../Favorites";

function Navbar(props) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { shoppingCart } = useShoppingCartContext();
  const { favorites } = useFavoritesContext();

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
            {favorites.length > 0 ? (
              <Icon favoriteSolid />
            ) : (
              <Icon favoriteOutline />
            )}
          </S.Button>
        </li>
        <li className="item">
          <S.Button onClick={() => setShowCart(true)}>
            <Icon cart />
            {shoppingCart.length > 0 && (
              <span className="span">{shoppingCart.length}</span>
            )}
          </S.Button>
        </li>
      </S.List>
      <AnimatePresence exitBeforeEnter>
        {showCart && <Cart closeMenu={() => setShowCart(false)} />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {showFavorites && (
          <Favorites closeMenu={() => setShowFavorites(false)} />
        )}
      </AnimatePresence>
    </S.Header>
  );
}

export default Navbar;
