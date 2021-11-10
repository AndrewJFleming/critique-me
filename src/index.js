import React from "react";
import ReactDOM from "react-dom";
//react-redux allows use to work with react and redux together
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
