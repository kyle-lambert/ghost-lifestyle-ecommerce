import colors from "../../styles/colors";
import styled from "styled-components";

export const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: ${colors.black};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 6.8rem;
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  max-width: 80%;
  line-height: 1.4;
  margin-bottom: 1.5rem;
`;

export const Children = styled.div`
  margin-top: 4.5rem;
`;
