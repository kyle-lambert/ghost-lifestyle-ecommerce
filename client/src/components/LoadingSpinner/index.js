import React from "react";
import { motion } from "framer-motion";
import * as S from "./StylesLoadingSpinner.js";

const spinnerVariant = {
  animate: {
    rotate: 360,
    transition: {
      loop: Infinity,
      duration: 0.5,
      ease: "linear",
    },
  },
};

function LoadingSpinner(props) {
  return (
    <S.LoadingSpinner>
      <motion.span
        animate="animate"
        variants={spinnerVariant}
        className="span"></motion.span>
    </S.LoadingSpinner>
  );
}

export default LoadingSpinner;
