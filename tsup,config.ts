import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  minify: true,
  target: "es2020",
  external: ["react", "react-dom"],
});
