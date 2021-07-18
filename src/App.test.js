import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./provider/AppProvider/App.provider";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
