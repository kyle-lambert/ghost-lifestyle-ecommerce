import styled from "styled-components";
import colors from "../../styles/colors";

export const Banner = styled.div`
  position: relative;
  height: calc(100vw / 10);
  background-color: ${colors.yellow};
`;

export const BannerInner = styled.div`
  position: absolute;
  bottom: -2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    max-width: 100%;
    width: 30%;
  }

  .heading {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    color: ${colors.black};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 2.8rem;
    padding: 0 1.6rem;
  }
`;
