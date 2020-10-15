import React from "react";
import * as S from "./StyledProductPage.js";

import useProductContext from "../../hooks/useProductContext";
import useCartContext from "../../hooks/useCartContext";

import ImageSpacer from "../../components/ImageSpacer";
import HeroContent from "../../components/HeroContent";
import ProductForm from "../../components/ProductForm";

const BASE_URL = "http://localhost:1337";

function ProductPage({ match }) {
  const slug = match.params.slug;
  const {
    dispatch,
    updateSlug,
    updateFlavour,
    updateQty,
    resetReducer,
    product,
    flavour,
    qty,
  } = useProductContext();
  const { cart, addToCart, removeFromCart, updateCartItem } = useCartContext();

  React.useEffect(() => {
    return () => {
      resetReducer(dispatch);
    };
  }, [dispatch, resetReducer]);

  React.useEffect(() => {
    updateSlug(slug, dispatch);
  }, [slug, updateSlug, dispatch]);

  const handleQtyChange = (e) => {
    const qty = Number.parseInt(e.target.value);
    updateQty(qty, dispatch);
  };

  const handleFlavourChange = (e) => {
    const id = Number.parseInt(e.target.value);
    updateFlavour(id);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addToCart(product, flavour, qty);
  };

  return (
    <S.PageWrapper>
      <S.HeroSection>
        {product && (
          <S.HeroInner>
            <div className="content">
              <HeroContent product={product}>
                <ProductForm
                  handleFlavourChange={handleFlavourChange}
                  handleFormSubmit={handleFormSubmit}
                  handleQtyChange={handleQtyChange}
                  flavour={flavour}
                  flavours={product.flavours}
                  qty={qty}
                  product={product}
                />
              </HeroContent>
            </div>
            <div className="picture">
              {flavour && (
                <ImageSpacer
                  src={`${BASE_URL}${flavour.image.url}`}
                  alt={product.name}
                />
              )}
            </div>
          </S.HeroInner>
        )}
      </S.HeroSection>
      <S.DetailsSection></S.DetailsSection>
    </S.PageWrapper>
  );
}

export default ProductPage;
