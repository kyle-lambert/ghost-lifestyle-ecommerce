import React from "react";
import * as S from "./StyledBrandLogo.js";

import { ReactComponent as Logo } from "../../assets/icons/brand_logo.svg";

function BrandLogo({ light }) {
  return (
    <S.Wrapper light={light}>
      <Logo />
    </S.Wrapper>
  );
}

export default BrandLogo;
