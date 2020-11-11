import React from "react";
import { AnimatePresence } from "framer-motion";
import queryString from "query-string";
import * as S from "./StyledShoppingPage.js";

import useShopping from "../../hooks/useShopping";

import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";
import PageLayout from "../../layout/PageLayout";
import ProgressBar from "../../components/ProgressBar";

import { fadeInUp } from "../../animations/variants";

function ShoppingPage({ location, history }) {
  const {
    categories,
    categoriesLoading,
    categoriesError,
    products,
    productsLoading,
    productsError,
    activeCategory,
    setCategory,
  } = useShopping();
  const categorySlug = queryString.parse(location.search).category || null;

  React.useEffect(() => {
    if (categorySlug) {
      setCategory(categorySlug);
    } else {
      setCategory("all");
    }
  }, [setCategory, categorySlug]);

  React.useEffect(() => {
    document.title = "Shop Ghost Lifestyle";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const newCategorySlug = e.target.name;
    history.push({
      pathname: "/products",
      search: "?category=" + newCategorySlug,
    });
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {(categoriesLoading || productsLoading) && <ProgressBar />}
      </AnimatePresence>
      <PageLayout>
        <S.ShoppingSection>
          <S.ShoppingInner>
            <S.ShoppingFilter
              initial="initial"
              animate={categoriesLoading ? "initial" : "animate"}
              variants={fadeInUp}>
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
              {!productsLoading &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </S.ShoppingCards>
          </S.ShoppingInner>
        </S.ShoppingSection>
      </PageLayout>
    </>
  );
}

export default ShoppingPage;
