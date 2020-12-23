import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalSyles from "./global-styles";
import StoreProvider from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalSyles/>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  rootElement
);
