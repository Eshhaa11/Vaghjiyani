import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // only if you actually have it

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
