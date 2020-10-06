import React from "react";
import * as S from "./StyledImageSpacer.js";

function ImageSpacer({ src, alt }) {
  return (
    <S.Wrapper>
      <img src={src} alt={alt} className="image" />
    </S.Wrapper>
  );
}

export default ImageSpacer;
