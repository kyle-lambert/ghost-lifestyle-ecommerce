import React from "react";
import * as S from "./StyledFormInput.js";

function FormInput({ label, error, value, handleChange, ...rest }) {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} value={value} error={error} onChange={(e) => handleChange(e)} />
    </>
  );
}

export default FormInput;
