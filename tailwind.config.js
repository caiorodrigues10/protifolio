/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
      "3xl": 48,
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",

      gray: {
        800: "#121212",
        500: "#292929",
        400: "#424242",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      blue: {
        500: "#009FFD",
      },
    },
    extend: {
      fontFamily: {
        sans: "Dosis, sans-serif",
      },
    },
  },
  plugins: [],
};
