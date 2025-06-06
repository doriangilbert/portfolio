import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  base: "/",
  plugins: [vue(), tailwindcss(), webfontDownload()],
});
