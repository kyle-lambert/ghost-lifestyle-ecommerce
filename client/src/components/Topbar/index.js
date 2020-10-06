import React from "react";
import * as S from "./StyledTopbar.js";

import Icon from "../Icon";

function Topbar({ cart, favorites, closeMenu }) {
  return (
    <S.Topbar>
      {cart && <span className="title">Your Cart</span>}
      {favorites && <span className="title">Your Favorites</span>}
      <S.Button onClick={closeMenu}>
        <Icon close />
      </S.Button>
    </S.Topbar>
  );
}

export default Topbar;
