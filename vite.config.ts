import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";





export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/portfolio/', // 👈 repo name, with *leading and trailing slashes*
  // plugins: [...]
  // and your base setting for GitHub Pages, e.g.:
  // base: '/portfolio/',
})