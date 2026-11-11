import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Punto de entrada: le dice a React "dibuja <App /> dentro de #root".
// El "!" le asegura a TypeScript que ese elemento sí existe en index.html.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
