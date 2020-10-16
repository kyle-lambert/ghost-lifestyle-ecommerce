import React from "react";
import * as S from "./StyledFormInputWithLabel.js";

function FormInputWithLabel({ label, ...props }) {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input {...props} />
    </S.Wrapper>
  );
}

export default FormInputWithLabel;
