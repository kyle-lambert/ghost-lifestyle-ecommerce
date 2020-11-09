import React from "react";
import * as S from "./StyledFormInput.js";

function FormInput({ label, value, handleChange, ...rest }) {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} value={value} onChange={(e) => handleChange(e)} />
    </>
  );
}

export default FormInput;
