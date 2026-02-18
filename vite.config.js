import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// IMPORTANT for GitHub Pages:
// change "linktree-vue-clone" to your GitHub repo name exactly
export default defineConfig({
  base: "/linktree-vue-clone/",
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
