import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

const applicationStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={applicationStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
