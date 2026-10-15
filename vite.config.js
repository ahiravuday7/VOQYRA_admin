import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "jsdom", //gives tests a browser-like DOM
    setupFiles: "./src/test/setup.js", //loads Testing Library matchers before tests
    css: true, // allows components importing CSS to be tested
  },
});
