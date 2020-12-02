import React from "react";
import { motion } from "framer-motion";
import * as S from "./StyledFavorites.js";

import { useFavoritesContext } from "../../contexts/FavoritesContext";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";
import Banner from "../Banner";

const backdropVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const menuVariant = {
  initial: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

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
        variants={backdropVariant}
        className="backdrop"></motion.span>
      <S.Favorites
        initial="initial"
        animate="animate"
        exit="initial"
        variants={menuVariant}>
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
