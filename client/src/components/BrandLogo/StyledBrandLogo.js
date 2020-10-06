import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.span`
  svg {
    fill: ${(props) => (props.light ? colors.white : colors.black)};
  }
`;
