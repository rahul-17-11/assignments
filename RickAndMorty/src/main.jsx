import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CharProvider from "./context/CharProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharProvider>
      <App />
    </CharProvider>
  </StrictMode>
);
