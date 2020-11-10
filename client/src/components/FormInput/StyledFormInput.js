import styled from "styled-components";
import colors from "../../styles/colors";

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  display: inline-block;
  color: ${colors.black};
`;

export const Input = styled.input`
  display: block;
  color: ${colors.black};
  font-size: inherit;
  background-color: ${colors.mediumGrey};
  height: 55px;
  padding: 15px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 2px solid ${colors.mediumGrey};

  &:focus {
    border-color: ${colors.blue};
  }
`;
