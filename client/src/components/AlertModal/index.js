import React from "react";
import * as S from "./StyledAlertModal.js";
import { fadeInCard } from "../../animations/variants";

import BrandLogo from "../BrandLogo";
import Heading from "../Heading";

function AlertModal({ orderSuccess, orderError }) {
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
          {orderSuccess && (
            <>
              <Heading h2 textCenter>
                Order Completed
              </Heading>
              <S.Text>
                Your order has been submitted, we've sent the recipt to your
                email.
              </S.Text>
            </>
          )}
          {orderError && (
            <>
              <Heading h2 textCenter>
                Order Error
              </Heading>
              <S.Text>
                Sorry, we encountered an error while trying to process your
                order, please try again in a few minutes.
              </S.Text>
            </>
          )}
          <S.TermsBar>
            <span className="span">Ghost Lifestyle</span>
          </S.TermsBar>
        </S.Modal>
      </S.Container>
    </>
  );
}

export default AlertModal;
