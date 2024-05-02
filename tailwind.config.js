/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#bff069",
      },
      padding: {
        60: "60px",
      },
      fontFamily: {
        cursive: ["cursive"],
      },
      screens: {
        sm: "576px",

        md: "960px",

        lg: "1440px",
      },
    },
  },
  plugins: [],
};
