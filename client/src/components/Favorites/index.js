import React from "react";
import * as S from "./StyledFavorites.js";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";
import Banner from "../Banner";

import ProteinImage from "../../assets/chips-ahoy.png";
import AminoImage from "../../assets/kiwi-strawberry.png";

function Favorites({ closeMenu }) {
  const removeFavoriteById = (productId) => {
    console.log("Removed favorite " + productId);
  };

  return (
    <S.Wrapper>
      <span className="backdrop"></span>
      <S.Favorites>
        <Topbar closeMenu={closeMenu} favorites />
        <Banner cart />
        <S.List>
          {products.map((product) => (
            <li key={product.id} className="item">
              <FavoritesItem
                product={product}
                removeFavoriteById={removeFavoriteById}
              />
            </li>
          ))}
        </S.List>
      </S.Favorites>
    </S.Wrapper>
  );
}

export default Favorites;

const products = [
  {
    id: 1,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
  {
    id: 2,
    name: "BCAA",
    image: AminoImage,
    flavour: "Kiwi Strawberry",
    price: 29.99,
    qty: 1,
  },
  {
    id: 3,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
];
