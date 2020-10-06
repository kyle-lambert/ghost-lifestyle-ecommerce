import React from "react";
import * as S from "./StyledBanner.js";
const PROMO_CODE = "ABC123";

function Banner({ copyright, cart }) {
  if (cart) {
    return (
      <S.Banner>
        <S.Text>
          Save 10% with code
          <span>{PROMO_CODE}</span>
        </S.Text>
      </S.Banner>
    );
  }
  if (copyright) {
    return (
      <S.Banner copyright={copyright}>
        <S.Text>
          {`Designed and built by Kyle Lambert, inspiration from Ghost Lifestyle. Copyright ${new Date().getFullYear()}`}
        </S.Text>
      </S.Banner>
    );
  }
  return (
    <S.Banner copyright={copyright}>
      <S.Text>
        Free shipping for all orders until December 2020. Use code
        <span>{PROMO_CODE}</span>in checkout.
      </S.Text>
    </S.Banner>
  );
}

export default Banner;
