import React from "react";

import * as S from "./StyledPageLayout.js";

const pageVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function PageLayout({ children }) {
  return (
    <S.Wrapper initial="initial" animate="animate" variants={pageVariants}>
      {children}
    </S.Wrapper>
  );
}

export default PageLayout;
