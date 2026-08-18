import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    lightningcss: {
      targets: {
        chrome: 111 << 16,
        firefox: 111 << 16,
        safari: 16 << 16,
      },
    },
  },
  build: {
    target: "es2020",
    cssTarget: ["chrome111", "firefox111", "safari16"],
    sourcemap: true,
  },
});
