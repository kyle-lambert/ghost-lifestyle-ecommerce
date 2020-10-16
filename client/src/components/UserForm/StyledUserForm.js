import styled from "styled-components";
import colors from "../../styles/colors";

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  padding: 1.8rem 2rem;
  margin-top: 2.8rem;
  background-color: ${colors.red};
  font-size: inherit;
  font-weight: 500;
  color: ${colors.white};
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(40, 40, 40, 0.15);
`;
