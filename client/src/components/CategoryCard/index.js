import React from "react";
import * as S from "./StyledCategoryCard.js";

import ImageSpacer from "../../components/ImageSpacer";

function CategoryCard({ category }) {
  const { name, imageSrc, slug } = category;

  const linkPath = {
    pathname: "/products",
    search: "?category=" + slug,
  };

  return (
    <S.LinkWrapper to={linkPath}>
      <span className="name">{name}</span>
      <S.ImageWrapper>
        <ImageSpacer src={imageSrc} alt={name} />
      </S.ImageWrapper>
    </S.LinkWrapper>
  );
}

export default CategoryCard;
