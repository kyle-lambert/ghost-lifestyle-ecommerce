import React from "react";
import * as S from "./StyledHeading.js";

const Heading = ({ h2, h3, h4, noMargin, textCenter, ...props }) => {
  if (h2)
    return (
      <S.HeadingTwo noMargin={noMargin} textCenter={textCenter} {...props} />
    );
  if (h3)
    return (
      <S.HeadingThree noMargin={noMargin} textCenter={textCenter} {...props} />
    );
  if (h4)
    return (
      <S.HeadingFour noMargin={noMargin} textCenter={textCenter} {...props} />
    );
  return (
    <S.HeadingOne noMargin={noMargin} textCenter={textCenter} {...props} />
  );
};

export default Heading;
