import styled from "styled-components";
import colors from "../../styles/colors";

export const Button = styled.button`
  position: relative;
  padding: 1.6rem 2.8rem;
  background-color: ${colors.black};
  font-size: inherit;
  color: ${colors.white};
  font-weight: 400;
  border-radius: 3px;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(40, 40, 40, 0.1);
  transition: transform 100ms ease-out;

  .span {
    position: relative;
    font-size: inherit;
    font-weight: 400;
    color: ${colors.white};
    z-index: 5;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.red};
    transform: scaleX(0);
    transition: transform 250ms ease-out;
    transform-origin: left;
    z-index: 1;
  }

  &:hover::after {
    transform: scaleX(1);
    transition: transform 250ms ease-out;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 100ms ease-out;
  }
`;
