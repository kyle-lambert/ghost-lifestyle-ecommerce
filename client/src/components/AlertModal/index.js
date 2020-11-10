import React from "react";
import * as S from "./StyledAlertModal.js";
import { fadeInCard } from "../../animations/variants";

import BrandLogo from "../BrandLogo";
import Heading from "../Heading";

function AlertModal({ title, msg }) {
  return (
    <>
      <S.Container
        initial="initial"
        animate="animate"
        variants={fadeInCard}
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
    </>
  );
}

export default AlertModal;
