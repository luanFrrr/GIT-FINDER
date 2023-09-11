import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/index.js";
import "./styles.css";
import "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
