import React from "react";
import * as S from "./StyledImageSpacer.js";

function ImageSpacer({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default ImageSpacer;
