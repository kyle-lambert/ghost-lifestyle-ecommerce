import React from "react";
import * as S from "./StyledImage.js";

const imageVariant = {
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

function Image(props) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <S.Image
      initial="initial"
      animate={loaded ? "animate" : "initial"}
      variants={imageVariant}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}

export default Image;
