// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//     container: {
//       xs: "320px",
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       "2xl": "1536px",
//     },
//   },
//   plugins: [require("@tailwindcss/container-queries")],
// };
const plugin = require("@tailwindcss/container-queries");
const plugin2 = require("tw-elements-react/dist/plugin.cjs");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "320px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [plugin, plugin2],
};
