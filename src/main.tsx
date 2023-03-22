import React from "react";
import ReactDOM from "react-dom/client";

import Steps from "./components/Steps";

import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Steps.PickAddOns />
  </React.StrictMode>
);
