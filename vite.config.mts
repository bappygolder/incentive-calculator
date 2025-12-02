import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  root: "spa",
  plugins: [react()],
  build: {
    outDir: "../dist-spa",
    emptyOutDir: true
  }
});
