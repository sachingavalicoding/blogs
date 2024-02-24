import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogProvider } from "./context/BlogContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </UserProvider>
  </React.StrictMode>
);
