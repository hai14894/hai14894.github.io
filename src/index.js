import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./provider/AppProvider/App.provider";

// chỗ  này nghĩa là ở App.js mình gọi function lúc đó AppProvider chưa được return về (chưa đc khởi tạo)
// Nên nó sẽ báo lỗi, mình đưa nó ra ngoài là nó wrap và khởi tạo trước khi mình dùng function

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
