import styled from "styled-components";
import colors from "../../styles/colors";

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  display: inline-block;
  color: ${colors.black};
`;

export const SelectWrapper = styled.div`
  position: relative;
  background-color: ${colors.mediumGrey};
  border-radius: 3px;

  .select {
    position: relative;
    padding: 1.8rem 2rem;
    padding-right: 4.8rem;
    display: inline-block;
    color: ${colors.black};
    background-color: transparent;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;
    font-size: inherit;
    z-index: 19;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.2rem;
    z-index: 9;
  }
`;
