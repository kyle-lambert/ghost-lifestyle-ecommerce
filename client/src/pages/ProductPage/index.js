import React from "react";
import * as S from "./StyledProductPage.js";
import { motion } from "framer-motion";

import { fadeInUp } from "../../animations/variants";

import useProduct from "../../hooks/useProduct";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

import ImageSpacer from "../../components/ImageSpacer";
import HeroContent from "../../components/HeroContent";
import ProductForm from "../../components/ProductForm";
import ProductDetails from "../../components/ProductDetails";

const BASE_URL = "http://localhost:1337";

function ProductPage({ match }) {
  const slug = match.params.slug;
  const {
    product,
    setSlug,
    formQty,
    setFormQty,
    formFlavour,
    setFormFlavour,
  } = useProduct();
  const { addToCart } = useShoppingCartContext();

  React.useEffect(() => {
    setSlug(slug);
  }, [slug, setSlug]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQtyChange = (e) => {
    const qty = Number.parseInt(e.target.value);
    setFormQty(qty);
  };

  const handleFlavourChange = (e) => {
    setFormFlavour(Number.parseInt(e.target.value));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addToCart({ product, formFlavour, formQty });
  };

  return (
    <>
      <S.HeroSection>
        {product && (
          <S.HeroInner>
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="content">
              <HeroContent product={product}>
                <ProductForm
                  handleFlavourChange={handleFlavourChange}
                  handleFormSubmit={handleFormSubmit}
                  handleQtyChange={handleQtyChange}
                  formFlavour={formFlavour}
                  formQty={formQty}
                  flavours={product.flavours}
                  product={product}
                />
              </HeroContent>
            </motion.div>
            <div className="picture">
              {formFlavour && (
                <ImageSpacer
                  src={`${BASE_URL}${formFlavour.image.url}`}
                  alt={product.name}
                />
              )}
            </div>
          </S.HeroInner>
        )}
      </S.HeroSection>
      <S.DetailsSection>
        <ProductDetails product={product} />
      </S.DetailsSection>
    </>
  );
}

export default ProductPage;
