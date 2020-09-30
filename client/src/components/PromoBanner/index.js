import React from "react";
import "./PromoBanner.scss";

const PROMO_CODE = "ABC123";

function PromoBanner({ cartPromo }) {
  return (
    <div className="PromoBanner">
      {cartPromo ? (
        <p className="PromoBanner-text">
          Save 10% with code
          <span>{PROMO_CODE}</span>
        </p>
      ) : (
        <p className="PromoBanner-text">
          Free shipping for all orders until December 2020. Use code
          <span>{PROMO_CODE}</span>in checkout.
        </p>
      )}
    </div>
  );
}

export default PromoBanner;
