import React from "react";
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

function ImageSpacer({ children }) {
  // const [loaded, setLoaded] = React.useState(false);

  return <S.Wrapper>{children}</S.Wrapper>;
}

export default ImageSpacer;
