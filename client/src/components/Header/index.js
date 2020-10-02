import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/icons/brand_logo.svg";

import Favorites from "../Favorites";
import FavoritesMenuOpen from "../FavoritesMenuOpen";
import Cart from "../Cart";
import CartMenuOpen from "../CartMenuOpen";

function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const openCartMenu = () => {
    setCartOpen(true);
  };

  const closeCartMenu = () => {
    setCartOpen(false);
  };

  const openFavoritesMenu = () => {
    setFavoritesOpen(true);
  };

  const closeFavoritesMenu = () => {
    setFavoritesOpen(false);
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
          <FavoritesMenuOpen handleOpen={openFavoritesMenu} />
        </li>
        <li className="Header-item">
          <CartMenuOpen handleOpen={openCartMenu} cartItems={5} />
        </li>
      </ul>
      {cartOpen && <Cart handleClose={closeCartMenu} />}
      {favoritesOpen && <Favorites handleClose={closeFavoritesMenu} />}
    </header>
  );
}

export default Header;
