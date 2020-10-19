import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 199;

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.black};
    opacity: 70%;
    z-index: 499;
  }
`;

export const Cart = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 525px;
  height: 100%;
  background-color: ${colors.lightGrey};
  z-index: 999;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 50px;
`;

export const Checkout = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-top: 1px solid ${colors.mediumGrey};
  padding: 2.6rem;
  margin-top: 10px;

  &::after {
    content: "";
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
      0deg,
      rgba(238, 238, 238, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const CheckoutButton = styled.button`
  position: relative;
  padding: 1.6rem;
  width: 100%;
  background-color: ${colors.black};
  font-size: inherit;
  font-weight: 400;
  border-radius: 3px;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(40, 40, 40, 0.15);
  transition: transform 100ms ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  .span {
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
