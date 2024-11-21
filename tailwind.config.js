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
