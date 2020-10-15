import React from "react";
import * as S from "./StyledHeroContent.js";

import BrandLogo from "../../components/BrandLogo";

function HeroContent({ product, children }) {
  return (
    <>
      <BrandLogo />
      <S.Heading>{product.name}</S.Heading>
      <S.Text>{product.description}</S.Text>
      <S.Children>{children}</S.Children>
    </>
  );
}

export default HeroContent;
