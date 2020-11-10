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

export const Favorites = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 525px;
  height: 100%;
  background-color: ${colors.lightGrey};
  z-index: 999;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 50px;

  .item {
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.mediumGrey};
    padding: 1rem;
    display: flex;
  }
`;
