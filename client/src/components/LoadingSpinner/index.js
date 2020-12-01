import React from "react";
import { motion } from "framer-motion";
import * as S from "./StylesLoadingSpinner.js";

function LoadingSpinner(props) {
  return (
    <S.LoadingSpinner>
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          loop: Infinity,
          duration: 0.5,
          ease: "linear",
        }}
        className="span"></motion.span>
    </S.LoadingSpinner>
  );
}

export default LoadingSpinner;
