import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 7px;
  width: 100%;

  .span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.blue};
    display: block;
    transform-origin: left;
    transform: scaleX(0.5);
  }
`;
