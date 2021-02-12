import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 250px, 0 150px);
    background-color: ${colors.red};
    z-index: -1;

    @media (min-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 500px, 0 300px);
    }

    @media (min-width: 1026px) {
      clip-path: polygon(100% 0, 55% 0, 100% 1200px);
    }
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  display: grid;
  row-gap: 2.6rem;
  grid-template-rows: auto auto;
  margin-bottom: 10rem;

  @media (min-width: 1026px) {
    grid-template-columns: 5fr 4fr;
    row-gap: unset;
    column-gap: 2.6rem;
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
