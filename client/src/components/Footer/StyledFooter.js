import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: 4.6rem 3.6rem;

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
`;

export const List = styled.ul`
  margin-right: 10%;

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
  margin-bottom: 2.6rem;
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
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
