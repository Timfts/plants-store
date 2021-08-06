import { defineConfig } from "vite";
import { posthtmlPlugin } from "vite-plugin-posthtml";
import posthtmlModules from "posthtml-modules";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
  },
  plugins: [
    posthtmlPlugin({
      plugins: [posthtmlModules({ root: "./src", from: "src/index.html" })],
    }),
    {
      name: "reload-html",
      async handleHotUpdate({ server, file }) {
        if (file.endsWith(".html")) {
          server.ws.send({
            type: "full-reload",
          });

          return [];
        }
      },
    },
  ],
});
