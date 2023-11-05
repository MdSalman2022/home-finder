import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StateProvider from "./contexts/StateProvider.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider>
        <App />
        <Toaster/>
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>
);
