import styled from "styled-components";
import colors from "../FavoriteToggle";

export const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: transform 150ms ease;

  &:hover {
    transform: scale(1.25);
    transition: transform 150ms ease;
  }
`;
