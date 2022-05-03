import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/header.css";
import "./styles/cards.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
