import React from "react";
import * as S from "./StyledButton.js";

function Button(props) {
  return (
    <S.Button {...props}>
      <span className="span">{props.children}</span>
    </S.Button>
  );
}

export default Button;
