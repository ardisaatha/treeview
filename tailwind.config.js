/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // ⛔ jangan reset global style
  },
  plugins: [],
};
