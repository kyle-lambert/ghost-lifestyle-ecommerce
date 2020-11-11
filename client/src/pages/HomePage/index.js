import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as S from "./StyledHomePage.js";

import ImageSpacer from "../../components/ImageSpacer";
import HeroContent from "../../components/HeroContent";
import Button from "../../components/Button";
import CategoryCard from "../../components/CategoryCard";

import { homeCategories, homeHeroProduct as product } from "../../data";
import { fadeInUp } from "../../animations/variants";
import { BASE_URL } from "../../data/api";

function HomePage(props) {
  React.useEffect(() => {
    document.title = "Ghost Lifestyle";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.HeroSection>
        <S.HeroInner>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="content">
            <HeroContent product={product}>
              <Link to={`/products/${product.slug}`}>
                <Button>Shop Now</Button>
              </Link>
            </HeroContent>
          </motion.div>
          <div className="picture">
            <ImageSpacer
              src={`${BASE_URL}${product.flavours[0].image.url}`}
              alt={product.name}
            />
          </div>
        </S.HeroInner>
      </S.HeroSection>
      <S.SupplementSection>
        <S.SupplementInner>
          {homeCategories.map((c) => {
            return <CategoryCard key={c.id} category={c} />;
          })}
        </S.SupplementInner>
      </S.SupplementSection>
    </>
  );
}

export default HomePage;
