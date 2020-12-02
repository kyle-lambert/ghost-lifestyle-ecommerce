import React from "react";
import * as S from "./StyledProductPage.js";
import { motion } from "framer-motion";

import useProduct from "../../hooks/useProduct";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";

import ImageSpacer from "../../components/ImageSpacer";
import Image from "../../components/Image";
import HeroContent from "../../components/HeroContent";
import ProductForm from "../../components/ProductForm";
import ProductDetails from "../../components/ProductDetails";
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

function ProductPage({ match }) {
  const slug = match.params.slug;
  const {
    loading,
    error,
    product,
    setSlug,
    formQty,
    setFormQty,
    formFlavour,
    setFormFlavour,
  } = useProduct();
  const { addToCart } = useShoppingCartContext();

  React.useEffect(() => {
    if (product) {
      document.title = product.name;
    }
  }, [product]);

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

  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return (
      <Error
        title="Fetching Error"
        msg="Sorry, we encountered an error while trying to fetch your data. Please try again in a few minutes."
      />
    );
  } else {
    if (product) {
      return (
        <>
          <S.HeroSection>
            <S.HeroInner>
              <motion.div
                initial="initial"
                animate="animate"
                variants={contentVariant}
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
                <ImageSpacer>
                  {formFlavour && formFlavour.image.formats.small.url && (
                    <Image
                      src={formFlavour.image.formats.small.url}
                      alt={product.name}
                    />
                  )}
                </ImageSpacer>
              </div>
            </S.HeroInner>
          </S.HeroSection>
          <S.DetailsSection>
            <ProductDetails product={product} />
          </S.DetailsSection>
        </>
      );
    } else {
      return (
        <Error
          title="Error"
          msg="Sorry, the product you're looking for doesn't exist"
        />
      );
    }
  }
}

export default ProductPage;
