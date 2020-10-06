import React from "react";
import * as S from "./StyledHeading.js";

const Heading = ({ h2, h3, h4, noMargin, ...props }) => {
  if (h2) return <S.HeadingTwo noMargin={noMargin} {...props} />;
  if (h3) return <S.HeadingThree noMargin={noMargin} {...props} />;
  if (h4) return <S.HeadingFour noMargin={noMargin} {...props} />;
  return <S.HeadingOne noMargin={noMargin} {...props} />;
};

export default Heading;
