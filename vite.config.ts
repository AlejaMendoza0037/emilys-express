import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite es el "motor" que arranca el proyecto y lo empaqueta para producción.
export default defineConfig({
  plugins: [react()],
});
