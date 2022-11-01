/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      segoe: ["Segoe-UI", "san-serif"],
    },
    extend: {
      colors: {
        primary: " #647787",
        secondary: "#4F4F4F",
       
      },
    },
  },
  plugins: [],
};
