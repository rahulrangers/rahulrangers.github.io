import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "/rahulrangers.github.io",
  plugins: [react()],
  base: "rahulrangers.github.io", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
