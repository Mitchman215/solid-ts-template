/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
/* eslint-enable */

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
})
