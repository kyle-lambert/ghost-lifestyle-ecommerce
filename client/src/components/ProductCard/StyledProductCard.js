import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 2.4rem;
  width: 100%;
  height: 100%;
  background-color: ${colors.mediumGrey};
  border-radius: 3px;
  transition: transform 250ms ease;

  .toggle {
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    opacity: 0;
    transition: opacity 150ms ease;
  }

  &:hover {
    transform: scale(1.025);
    transition: transform 250ms ease;
  }

  &:hover .toggle {
    opacity: 1;
    transition: opacity 150ms ease;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Text = styled.p`
  margin-bottom: 2.8rem;
`;

export const Info = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  .price {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: inherit;
    color: inherit;
  }
`;
