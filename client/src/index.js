import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import GlobalStyle from "./styles/global";

// Global contexts
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <GlobalStyle />
        <FavoritesProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </FavoritesProvider>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
