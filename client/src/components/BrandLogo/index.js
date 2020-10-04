import React from "react";
import "./BrandLogo.scss";

import { ReactComponent as Logo } from "../../assets/icons/brand_logo.svg";

function BrandLogo({ light }) {
  return (
    <div data-light={light} className="BrandLogo">
      <Logo />
    </div>
  );
}

export default BrandLogo;
