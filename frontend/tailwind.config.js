import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
// export const tailwind = {
//   content: ["./src/index.js", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         secondary: {
//           DEFAULT: colors.neutral[200],
//           hover: colors.neutral[300],
//           border: colors.neutral[400],
//           text: colors.neutral[500],
//           dark: colors.neutral[800],
//         },
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
