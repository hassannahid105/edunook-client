/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { lato: ["Lato", "serif"] },
      colors: {
        main: "#4c5f4e",
        second: "#61cE70",
        third: "#20c999",
      },
    },
  },
  plugins: [require("daisyui")],
};
// https://preview.themeforest.net/item/avada-responsive-multipurpose-theme/full_screen_preview/2833226?_ga=2.166134590.108008397.1732843700-478794015.1718680210
