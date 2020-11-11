import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

export const LinkWrapper = styled(Link)`
  position: relative;
  display: inline-block;
  background-color: ${(props) => props.color};

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 3.6rem;
    color: ${colors.white};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    z-index: 5;
    opacity: 0;
    transition: opacity 150ms ease;
  }

  &:hover::after {
    opacity: 0.7;
    transition: opacity 150ms ease;
  }

  &:hover .name {
    opacity: 1;
    transition: opacity 150ms ease;
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 300px;
`;
