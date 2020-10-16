import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  margin: 0.3rem 0;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  display: inline-block;
  color: ${colors.black};
  padding-left: 0.8rem;
`;

export const Input = styled.input`
  padding: 1.8rem 2rem;
  color: ${colors.black};
  font-size: inherit;
  width: 100%;
  border: 2px solid ${colors.lightGrey};
  border-radius: 3px;
  outline: none;

  &:focus {
    border-color: ${colors.blue};
  }
`;
