import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/icons/brand_logo.svg";
import FavoritesButton from "../FavoritesButton";
import CartButton from "../CartButton";
import Cart from "../Cart";
import Favorites from "../Favorites";

function Header(props) {
  const [cart, setCart] = useState(false);
  const [favorites, setFavorites] = useState(false);

  const handleCart = () => {
    setCart((prev) => !prev);
  };

  const handleFavorites = () => {
    setFavorites((prev) => !prev);
  };

  return (
    <header className="Header">
      <nav className="Header-nav">
        <button type="button" className="Header-shop">
          Shop
        </button>
      </nav>
      <Link to="/" className="Header-logo">
        <Logo />
      </Link>
      <ul className="Header-list">
        <li className="Header-item">
          <button type="button" className="Header-login">
            Login
          </button>
        </li>
        <li className="Header-item">
          <FavoritesButton handleFavorites={handleFavorites} hasFavorites />
        </li>
        <li className="Header-item">
          <CartButton handleCart={handleCart} cartItems={6} />
        </li>
      </ul>
      {cart && <Cart handleClose={() => setCart(false)} />}
      {favorites && <Favorites handleClose={() => setFavorites(false)} />}
    </header>
  );
}

export default Header;
