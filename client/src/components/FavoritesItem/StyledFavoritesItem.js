import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const ImageWrapper = styled.div`
  flex-basis: 105px;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  flex-basis: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    padding: 0.5rem;
    color: ${colors.black};
    background-color: transparent;
    transition: transform 150ms ease;

    &:hover {
      transform: scale(1.25);
      transition: transform 150ms ease;
    }
  }
`;

export const Name = styled(Link)`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  color: ${colors.black};
  line-height: 1.6;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${colors.black};
    border-radius: 3px;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 150ms ease;
  }

  :hover::after {
    transform: scaleX(1);
    transition: transform 150ms ease;
  }
`;

export const Text = styled.span`
  display: block;
  color: ${colors.black};
  line-height: 1.4;
  font-size: 1.4rem;
  font-weight: 400;
`;
