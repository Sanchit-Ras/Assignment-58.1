import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router";
import App from "./app.jsx";
import ProductDetail from "./ProductDetail.jsx"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);