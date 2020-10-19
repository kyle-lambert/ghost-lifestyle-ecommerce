import React from "react";
import { motion } from "framer-motion";
import * as S from "./StyledFavorites.js";

import { useFavoritesContext } from "../../contexts/FavoritesContext";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";
import Banner from "../Banner";

import { cartBackdrop, cartSlideInFromRight } from "../../animations/variants";

function Favorites({ closeMenu }) {
  const { favorites, removeFavorite } = useFavoritesContext();

  const handleRemoveFavorite = (id) => {
    const productIndex = favorites.findIndex((f) => f.id === id);
    if (productIndex !== -1) {
      removeFavorite(id);
    }
  };

  return (
    <S.Wrapper>
      <motion.span
        initial="initial"
        animate="animate"
        exit="initial"
        variants={cartBackdrop}
        className="backdrop"></motion.span>
      <S.Favorites
        initial="initial"
        animate="animate"
        exit="initial"
        variants={cartSlideInFromRight}>
        <Topbar closeMenu={closeMenu} favorites />
        <Banner cart />
        <S.List>
          {favorites.map((favorite) => (
            <li key={favorite.id} className="item">
              <FavoritesItem
                product={favorite}
                closeMenu={closeMenu}
                handleRemoveFavorite={handleRemoveFavorite}
              />
            </li>
          ))}
        </S.List>
      </S.Favorites>
    </S.Wrapper>
  );
}

export default Favorites;
