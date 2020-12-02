import React from "react";
import * as S from "./StyledAlertModal.js";

import BrandLogo from "../BrandLogo";
import Heading from "../Heading";

const alertVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function AlertModal({ title, msg }) {
  return (
    <S.Container
      initial="initial"
      animate="animate"
      variants={alertVariant}
      exit="initial">
      <S.Backdrop />
      <S.Modal>
        <div className="logo">
          <BrandLogo />
        </div>
        <Heading h2 textCenter>
          {title}
        </Heading>
        <S.Text>{msg}</S.Text>
        <S.TermsBar>
          <span className="span">Ghost Lifestyle</span>
        </S.TermsBar>
      </S.Modal>
    </S.Container>
  );
}

export default AlertModal;
