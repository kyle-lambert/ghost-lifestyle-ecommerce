import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as S from "./StyledHomePage.js";

import ImageSpacer from "../../components/ImageSpacer";
import Image from "../../components/Image";
import HeroContent from "../../components/HeroContent";
import Button from "../../components/Button";
import CategoryCard from "../../components/CategoryCard";

import { homeCategories, homeHeroProduct as product } from "../../data";

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

function HomePage(props) {
  React.useEffect(() => {
    document.title = "Ghost Lifestyle";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.HeroSection>
        <motion.div
          initial="initial"
          animate="animate"
          variants={contentVariant}
          className="content">
          <HeroContent product={product}>
            <Link to={`/products/${product.slug}`}>
              <Button>Shop Now</Button>
            </Link>
          </HeroContent>
        </motion.div>
        <div className="picture">
          <ImageSpacer>
            {product.flavours[0] && product.flavours[0].image.url && (
              <Image src={product.flavours[0].image.url} alt={product.name} />
            )}
          </ImageSpacer>
        </div>
      </S.HeroSection>
      <S.SupplementSection>
        {homeCategories.map((c) => {
          return <CategoryCard key={c.id} category={c} />;
        })}
      </S.SupplementSection>
    </>
  );
}

export default HomePage;
