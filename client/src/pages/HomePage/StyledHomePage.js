import styled from "styled-components";
import colors from "../../styles/colors";

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
    background-color: ${colors.black};
    z-index: -1;

    @media (min-width: 1026px) {
      clip-path: polygon(55% 0, 100% 0, 100% 100%, 85% 100%);
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

export const SupplementSection = styled.section`
  background-color: ${colors.white};
`;

export const SupplementInner = styled.div`
  width: 100%;
  /* padding: 5.8rem 5%; */
  display: grid;
  /* column-gap: 2.6rem;
  row-gap: 2.6rem; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 1026px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
