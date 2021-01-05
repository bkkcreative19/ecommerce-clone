import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MyContext } from "./context/context";

ReactDOM.render(
  <MyContext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </MyContext>,
  document.getElementById("root")
);
