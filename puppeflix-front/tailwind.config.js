/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#582770",
        purple: "#773D94",
        magenta: "#943D8A",
        "dark-pink": "#C22760",
        pink: "#E81764",
        "pink-opacity-70": "#E8176499",
      }
    },
  },
  plugins: [],
}
