import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

export const LinkWrapper = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  margin: 0 auto;
  width: 100%;
  min-height: 200px;

  @media (min-width: 768px) {
    min-height: 300px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${colors.black};
    opacity: 0;
    transition: opacity 150ms ease;
  }

  .name {
    position: relative;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 3.6rem;
    color: ${colors.mediumGrey};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    transition: color 150ms ease, transform 150ms ease;
    z-index: 10;
  }

  &:hover::after {
    opacity: 0.7;
    transition: opacity 150ms ease;
  }

  &:hover .name {
    color: ${colors.white};
    transform: scale(1.1);
  }
`;
