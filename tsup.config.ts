import { defineConfig } from "tsup";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import postcssPrefixSelector from "postcss-prefix-selector";
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
    const css = await fs.readFile("src/styles/index.css", "utf-8");

    const result = await postcss([
      tailwindcss,
      autoprefixer,
      postcssPrefixSelector({
        prefix: "tw-",
        exclude: ["html", "body"], // Exclude html and body tags if needed
      }),
    ]).process(css, {
      from: "src/styles/index.css",
      to: "dist/index.css",
    });

    await fs.writeFile("dist/index.css", result.css);
    console.log("✅ Tailwind CSS bundled to dist/index.css");
  },
});