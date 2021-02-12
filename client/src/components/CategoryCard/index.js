import React from "react";
import * as S from "./StyledCategoryCard.js";

function CategoryCard({ category }) {
  const { name, slug } = category;

  const linkPath = {
    pathname: "/products",
    search: "?category=" + slug,
  };

  return (
    <S.LinkWrapper to={linkPath} color={category.color}>
      <span className="name">{name}</span>
    </S.LinkWrapper>
  );
}

export default CategoryCard;
