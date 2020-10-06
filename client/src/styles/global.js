import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

:root {
  box-sizing: border-box;
  font-size: 10px;
  font-family: "Inter", sans-serif;
}

body {
  font-size: 1.6rem;
  font-weight: 300;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
}

button {
  font-family: inherit;
  outline: none;
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

select {
  font-family: inherit;
  font-weight: 400;
}
`;

export default GlobalStyle;
