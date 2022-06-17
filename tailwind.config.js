/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e3f9fe",
          200: "#c6f2fe",
          300: "#aaecfd",
          400: "#8de5fd",
          500: "#71dffc",
          600: "#5ab2ca",
          700: "#448697",
          800: "#2d5965",
          900: "#172d32",
        },
        secondary: {
          100: "#f4e4fd",
          200: "#e9c8fb",
          300: "#dfadf9",
          400: "#d491f7",
          500: "#c976f5",
          600: "#a15ec4",
          700: "#794793",
          800: "#502f62",
          900: "#281831",
        },
      },
    },
  },
  plugins: [],
};
