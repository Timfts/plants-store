import { defineConfig } from "vite";

import handlebars from "vite-plugin-handlebars";
import { resolve } from 'path';

export default defineConfig({
  root: "src/",
  publicDir: "public/",
  build: {
    outDir: "../dist",
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/fragments'),
  })],
});
