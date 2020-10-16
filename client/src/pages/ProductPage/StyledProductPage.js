import styled from "styled-components";
import colors from "../../styles/colors";

// ********** Hero Styles **********

export const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 15%);
    background-color: ${colors.red};
    z-index: -1;

    @media (min-width: 1026px) {
      clip-path: polygon(100% 0, 55% 0, 100% 100%);
    }
  }
`;

export const HeroInner = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;

  @media (min-width: 1026px) {
    grid-template-columns: 5fr 4fr;
  }

  .content {
    grid-row: 2 / 3;

    @media (min-width: 1026px) {
      grid-row: unset;
      grid-column: 1 / 2;
      align-self: center;
    }
  }

  .picture {
    grid-row: 1 / 2;
    justify-self: center;
    width: 60%;

    @media (min-width: 1026px) {
      grid-row: unset;
      grid-column: 2 / 3;
      width: 100%;
      align-self: center;
    }
  }
`;

// ********** Details Styles **********

export const DetailsSection = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  width: 100%;
`;
