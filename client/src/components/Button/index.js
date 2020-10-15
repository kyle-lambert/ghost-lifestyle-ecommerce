import React from "react";
import * as S from "./StyledButton.js";

function Button(props) {
  return <S.Button {...props}>{props.children}</S.Button>;
}

export default Button;
