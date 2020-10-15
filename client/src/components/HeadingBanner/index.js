import React from "react";
import * as S from "./StyledHeadingBanner.js";

import GhostGraffiti from "../../assets/images/ghost_graffiti.png";

function HeadingBanner({ heading }) {
  return (
    <S.Banner>
      <S.BannerInner>
        <img src={GhostGraffiti} alt="Ghost Graffit" className="image" />
        <h2 className="heading">{heading}</h2>
      </S.BannerInner>
    </S.Banner>
  );
}

export default HeadingBanner;
