import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

export const Button = styled(Link)`
  padding: 1.6rem 2.8rem;
  background-color: ${colors.black};
  font-size: inherit;
  color: ${colors.white};
  font-weight: 400;
  border-radius: 3px;
  display: inline-block;
`;
