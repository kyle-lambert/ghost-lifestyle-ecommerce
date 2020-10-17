import React from "react";
import axios from "axios";
import queryString from "query-string";
import * as S from "./StyledShoppingPage.js";

import useShopping from "../../hooks/useShopping";

import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";

function ShoppingPage({ location, history }) {
  const { categories, products, activeCategory, setCategory } = useShopping();
  const categorySlug = queryString.parse(location.search).category || null;

  React.useEffect(() => {
    if (categorySlug) {
      setCategory(categorySlug);
    }
  }, [categorySlug]);

  const handleChange = (e) => {
    const newCategorySlug = e.target.name;
    history.push({
      pathname: "/products",
      search: "?category=" + newCategorySlug,
    });
  };

  return (
    <>
      <S.ShoppingSection>
        <S.ShoppingInner>
          <S.ShoppingFilter>
            <Heading h4>
              Filter
              <br />
              Products
            </Heading>
            <ul className="list">
              <li className="item">
                <S.Button
                  name="all"
                  disabled={activeCategory === "all"}
                  onClick={handleChange}>
                  All Products
                </S.Button>
              </li>
              {categories.map((c) => {
                return (
                  <li key={c.id} className="item">
                    <S.Button
                      disabled={activeCategory === c.slug}
                      name={c.slug}
                      onClick={handleChange}>
                      {c.name}
                    </S.Button>
                  </li>
                );
              })}
            </ul>
          </S.ShoppingFilter>
          <S.ShoppingCards>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </S.ShoppingCards>
        </S.ShoppingInner>
      </S.ShoppingSection>
    </>
  );
}

export default ShoppingPage;
