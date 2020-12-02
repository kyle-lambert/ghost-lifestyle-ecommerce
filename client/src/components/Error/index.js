import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./StyledError.js";

import Button from "../../components/Button";
import Heading from "../../components/Heading";

const errorVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function Error({ title, msg }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <S.Wrapper>
      <S.Inner initial="initial" animate="animate" variants={errorVariant}>
        <Heading h1 textCenter>
          {title}
        </Heading>
        <S.Text>{msg}</S.Text>
        <Button onClick={handleClick}>Go Home</Button>
      </S.Inner>
    </S.Wrapper>
  );
}

export default Error;
