import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.scss";
import "./cover.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "Provider";

ReactDOM.render(
  // <React.StrictMode>
  <Provider>
    <App />
    {/* <Main /> */}
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
