module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js",],
  theme: {
    fontFamily:{
      'merienda': ['Merienda', 'cursive'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}