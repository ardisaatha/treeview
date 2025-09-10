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
    // baca global.css
    const css = await fs.readFile("src/assets/styles/index.css", "utf-8");

    // proses dengan postcss + tailwind + autoprefixer
    const result = await postcss([tailwindcss(), autoprefixer()]).process(css, {
      from: "src/components/global.css",
      to: "dist/index.css",
    });

    // tulis hasil CSS
    await fs.writeFile("dist/index.css", result.css);
  },
});
