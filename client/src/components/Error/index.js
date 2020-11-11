import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./StyledError.js";

import Button from "../../components/Button";
import Heading from "../../components/Heading";

import { fadeInUp } from "../../animations/variants";

function Error({ title, msg }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <S.Wrapper>
      <S.Inner initial="initial" animate="animate" variants={fadeInUp}>
        <Heading h1>{title}</Heading>
        <S.Text>{msg}</S.Text>
        <Button onClick={handleClick}>Go Home</Button>
      </S.Inner>
    </S.Wrapper>
  );
}

export default Error;
