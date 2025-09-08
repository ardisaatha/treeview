import { defineConfig } from "tsup";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import fs from "fs/promises";

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
  async onSuccess() {
    const css = await fs.readFile("src/components/global.css", "utf-8");
    const result = await postcss([tailwindcss, autoprefixer]).process(css, {
      from: "src/components/global.css",
      to: "dist/index.css",
    });
    await fs.writeFile("dist/index.css", result.css);
  },
});