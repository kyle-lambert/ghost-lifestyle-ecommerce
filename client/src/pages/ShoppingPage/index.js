import React from "react";
import queryString from "query-string";
import * as S from "./StyledShoppingPage.js";

import useShopping from "../../hooks/useShopping";

import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";
import PageLayout from "../../layout/PageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import Error from "../../components/Error";

const contentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function ShoppingPage({ location, history }) {
  const { products, productsLoading, productsError, activeCategory, setCategory } = useShopping();
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

  const renderProduct = () => {
    if (productsLoading) {
      return <LoadingSpinner />;
    } else if (productsError) {
      return (
        <Error
          title="Fetching Error"
          msg="Sorry, we encountered an error while trying to fetch your products. Please try again in a few minutes."
        />
      );
    } else {
      return Array.isArray(products) && products.length > 0 ? (
        <S.ShoppingCards>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </S.ShoppingCards>
      ) : null;
    }
  };

  return (
    <PageLayout>
      <S.ShoppingSection>
        <S.ShoppingFilter initial="initial" animate="animate" variants={contentVariant}>
          <Heading h4>
            Filter
            <br />
            Products
          </Heading>
          <ul className="list">
            <li className="item">
              <S.Button name="all" disabled={activeCategory === "all"} onClick={handleChange}>
                All Products
              </S.Button>
            </li>
            <li className="item">
              <S.Button
                name="protein"
                disabled={activeCategory === "protein"}
                onClick={handleChange}>
                Protein
              </S.Button>
            </li>
            <li className="item">
              <S.Button
                name="amino-acids"
                disabled={activeCategory === "amino-acids"}
                onClick={handleChange}>
                Amino Acids
              </S.Button>
            </li>
            <li className="item">
              <S.Button
                name="pre-workout"
                disabled={activeCategory === "pre-workout"}
                onClick={handleChange}>
                Pre-Workout
              </S.Button>
            </li>
            <li className="item">
              <S.Button name="greens" disabled={activeCategory === "greens"} onClick={handleChange}>
                Greens
              </S.Button>
            </li>
            <li className="item">
              <S.Button name="gamer" disabled={activeCategory === "gamer"} onClick={handleChange}>
                Gamer
              </S.Button>
            </li>
            <li className="item">
              <S.Button
                name="muscle-builder"
                disabled={activeCategory === "muscle-builder"}
                onClick={handleChange}>
                Muscle Builder
              </S.Button>
            </li>
          </ul>
        </S.ShoppingFilter>
        <S.ShoppingProductsWrapper>{renderProduct()}</S.ShoppingProductsWrapper>
      </S.ShoppingSection>
    </PageLayout>
  );
}

export default ShoppingPage;
