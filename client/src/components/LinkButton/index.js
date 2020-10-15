import React from "react";
import * as S from "./StyledLinkButton.js";

function LinkButton(props) {
  return <S.Button {...props}>{props.children}</S.Button>;
}

export default LinkButton;
