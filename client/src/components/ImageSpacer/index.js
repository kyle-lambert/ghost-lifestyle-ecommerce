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
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

function ImageSpacer({ src, alt }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <S.Wrapper>
      {/* <motion.img
        key={src}
        initial="initial"
        animate={loaded ? "animate" : "initial"}
        variants={fadeInImage}
        onLoad={() => setLoaded(true)}
        src={src}
        alt={alt}
        className="image"
      /> */}
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
