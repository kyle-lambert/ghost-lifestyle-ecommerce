import styled from "styled-components";
import colors from "../../styles/colors";

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2099;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;

  .span {
    display: block;
    width: 40px;
    height: 40px;
    border: 3px solid ${colors.mediumGrey};
    border-top-color: ${colors.blue};
    border-right-color: ${colors.blue};
    border-radius: 50%;
  }
`;
