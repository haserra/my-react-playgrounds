import React from "react";
// import ReactDOM  from "react-dom";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
// import App from "./App";
import App from "./components/App"; // this allows the component to be imported by name and as the default.
// always prefer using named exports

import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.css";

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
