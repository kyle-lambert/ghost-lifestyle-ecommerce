import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  position: relative;
  background-color: ${colors.black};
  padding: 4.6rem 3.6rem;

  .nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 0.5rem;
    margin-bottom: 4.8rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (min-width: 1026px) {
      display: inline-flex;
      margin-bottom: unset;
      width: 70%;
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 2.8rem;

  @media (min-width: 768px) {
    margin-bottom: unset;
  }

  @media (min-width: 1026px) {
    flex-basis: 200px;
  }

  .item {
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: unset;
    }
  }
`;

export const ListTitle = styled.span`
  color: ${colors.white};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.8rem;
  display: block;
`;

export const RouteLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  padding: 0.5rem 0;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const Anchor = styled.a`
  color: ${colors.white};
  text-decoration: none;
  padding: 0.5rem 0;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  @media (min-width: 1026px) {
    position: absolute;
    top: 4.6rem;
    right: 3.6rem;
  }
`;
