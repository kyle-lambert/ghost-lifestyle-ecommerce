import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  height: 8rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.6rem;
  box-shadow: 0 2px 6px rgba(40, 40, 40, 0.1);
`;

export const Nav = styled.nav`
  margin-right: 2.6rem;
`;

export const Logo = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ShopLink = styled(Link)`
  &:hover {
    font-weight: 400;
  }
`;

export const List = styled.ul`
  margin-left: 2.6rem;
  display: flex;
  align-items: center;

  .item {
    margin-left: 1rem;
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  .span {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${colors.red};
    font-size: 1rem;
    color: ${colors.white};
    font-weight: 500;
    line-height: 1.7;
  }
`;
