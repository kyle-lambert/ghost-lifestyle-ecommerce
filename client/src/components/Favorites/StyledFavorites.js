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
  background-color: ${colors.mediumGrey};
  z-index: 999;
  overflow: hidden;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  .item {
    background-color: ${colors.lightGrey};
    border-bottom: 1px solid ${colors.mediumGrey};
    padding: 1.5rem;
    display: flex;
  }
`;
