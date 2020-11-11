import React from "react";
import * as S from "./StyledProgressBar.js";
import { motion } from "framer-motion";

const progressBar = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 0.6,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  exit: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

function ProgressBar(props) {
  return (
    <S.Wrapper>
      <motion.span
        initial="initial"
        animate="animate"
        exit="exit"
        variants={progressBar}
        className="span"></motion.span>
    </S.Wrapper>
  );
}

export default ProgressBar;
