import styled from "styled-components";
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

export const Favorites = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 525px;
  height: 100%;
  background-color: ${colors.lightGrey};
  z-index: 999;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
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

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .item {
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.mediumGrey};
    padding: 1rem;
    display: flex;
  }
`;
