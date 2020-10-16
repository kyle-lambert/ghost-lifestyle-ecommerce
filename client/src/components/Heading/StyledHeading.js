import styled, { css } from "styled-components";
import colors from "../../styles/colors";

const baseStyle = css`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: ${colors.black};
  margin-bottom: ${(props) => props.noMargin && "0"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
`;

export const HeadingOne = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 2.5rem;
  ${baseStyle};
`;

export const HeadingTwo = styled.h2`
  font-size: 3.6rem;
  margin-bottom: 2rem;
  ${baseStyle};
`;

export const HeadingThree = styled.h3`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  ${baseStyle};
`;

export const HeadingFour = styled.h4`
  font-size: 2.4rem;
  margin-bottom: 1.3rem;
  ${baseStyle};
`;
