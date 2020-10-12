import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.mediumGrey};
  border-radius: 3px;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.025);
    transition: transform 250ms ease;
  }

  .toggle {
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
  }
`;

export const Card = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 4.4rem 2.4rem 2.4rem 2.4rem;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 80%;
  padding: 1.2rem 0;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Text = styled.p`
  margin-bottom: 1.6rem;
`;

export const Price = styled.span`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: inherit;
  line-height: 1.4;
  color: inherit;
  margin-top: auto;
  text-align: right;
`;
