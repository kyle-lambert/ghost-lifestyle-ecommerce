import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./StyledCategoryPage.js";

import useProducts from "../../hooks/useProducts";
import useCategories from "../../hooks/useCategories";

import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";

function CategoryPage(props) {
  const [activeCategory, setActiveCategory] = useState("");
  const [products, loading, error] = useProducts("/categories", activeCategory);
  const [categories] = useCategories();

  const handleCategoryChange = (e) => {
    const categoryName = e.target.name.trim();
    setActiveCategory(categoryName);
  };

  useEffect(() => {
    const initActiveCategory = () => {
      if (categories.length > 0) {
        setActiveCategory(categories[0].name);
      }
    };

    initActiveCategory();
  }, [categories]);

  return (
    <>
      <S.CategorySection>
        <S.CategoryInner>
          <S.CategoryFilter>
            <Heading h4>
              Filter
              <br />
              Products
            </Heading>
            <ul className="list">
              {categories.map((category) => {
                return (
                  <li key={uuidv4()} className="item">
                    <S.Button
                      selected={activeCategory === category.name}
                      disabled={activeCategory === category.name}
                      name={category.name}
                      onClick={handleCategoryChange}>
                      {category.name}
                    </S.Button>
                  </li>
                );
              })}
            </ul>
          </S.CategoryFilter>
          <S.CategoryCards>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </S.CategoryCards>
        </S.CategoryInner>
      </S.CategorySection>
      {/* <PageContainer>
        <S.Wrapper>
          <S.Category>
            <S.CategoryList>
              <Heading h4>
                Filter
                <br />
                Products
              </Heading>
              {categories.map((category) => {
                return (
                  <li key={uuidv4()} className="item">
                    <S.Button
                      selected={activeCategory === category.name}
                      disabled={activeCategory === category.name}
                      name={category.name}
                      onClick={handleCategoryChange}>
                      {category.name}
                    </S.Button>
                  </li>
                );
              })}
            </S.CategoryList>
          </S.Category>
          <S.Cards>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </S.Cards>
        </S.Wrapper>
      </PageContainer> */}
    </>
  );
}

export default CategoryPage;
