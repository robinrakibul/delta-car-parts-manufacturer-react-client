module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'merienda': ['Merienda', 'cursive'],
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}