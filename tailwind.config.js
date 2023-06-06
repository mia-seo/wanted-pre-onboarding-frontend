/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandG: "#448859",
        brandB: "#FFEDDF",
      },
    },
  },
  plugins: [require("daisyui")],
};
