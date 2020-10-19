import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as S from "./StyledImageSpacer.js";

const fadeInImage = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

function ImageSpacer({ src, alt }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <S.Wrapper>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={src}
          initial="initial"
          animate={loaded ? "animate" : "initial"}
          exit="initial"
          variants={fadeInImage}
          onLoad={() => setLoaded(true)}
          src={src}
          alt={alt}
          className="image"
        />
      </AnimatePresence>
    </S.Wrapper>
  );
}

export default ImageSpacer;
