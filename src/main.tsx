import React from "react";
import ReactDOM from "react-dom/client";

import Steps from "./components/Steps";

import "./styles/global.scss";
import MultiStepForm from "./components/MultiStepForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MultiStepForm />
  </React.StrictMode>
);
