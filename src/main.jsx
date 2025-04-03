import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import store
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
