import React from "react";
import * as S from "./StyledFormSelect.js";

import Icon from "../../components/Icon";

function FormSelect({ label, children }) {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.SelectWrapper>
        {children}
        <span className="icon">
          <Icon expandMore />
        </span>
      </S.SelectWrapper>
    </>
  );
}

export default FormSelect;
