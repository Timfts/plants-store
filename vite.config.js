import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
  },
  plugins: [
    handlebars({
      context: {
        title: "Hello, world!",
      },
      partialDirectory: resolve(__dirname, "src/templates"),
    }),
  ],
});