import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: '/portfolio/', // 👈 repo name, with *leading and trailing slashes*
  // plugins: [...]
})
