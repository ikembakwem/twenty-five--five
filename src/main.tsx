import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ClockProvider } from "./contexts/ClockConext.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClockProvider>
      <App />
    </ClockProvider>
  </React.StrictMode>
);
