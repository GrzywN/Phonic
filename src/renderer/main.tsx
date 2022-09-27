import React from "react";
import { createRoot } from "react-dom/client";

import AppContainer from "./containers/AppContainer";
import App from "./App";

import "./assets/fonts/Fira_Code_v6.2/fira_code.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <AppContainer>
    <App />
  </AppContainer>
);
