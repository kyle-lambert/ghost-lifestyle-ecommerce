import React from "react";
import * as S from "./StyledCategoryCard.js";

import ImageSpacer from "../../components/ImageSpacer";
import Image from "../../components/Image";

function CategoryCard({ category }) {
  const { name, imageSrc, slug } = category;

  const linkPath = {
    pathname: "/products",
    search: "?category=" + slug,
  };

  return (
    <S.LinkWrapper to={linkPath} color={category.color}>
      <span className="name">{name}</span>
      <S.ImageWrapper>
        <ImageSpacer>
          <Image src={imageSrc} alt={name} />
        </ImageSpacer>
      </S.ImageWrapper>
    </S.LinkWrapper>
  );
}

export default CategoryCard;
