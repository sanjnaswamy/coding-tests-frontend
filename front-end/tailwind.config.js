/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      open_sans: ['Open Sans']
    },
    extend: {},
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '992px',
      'xl': '1440px'
    }
  },
  plugins: [],
}