import styled from "styled-components";
import colors from "../../styles/colors";

export const Topbar = styled.div`
  position: relative;
  padding: 0 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  height: 50px;
  box-shadow: 0 1px 4px rgba(40, 40, 40, 0.1);

  .title {
    font-weight: 400;
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: transparent;
`;
