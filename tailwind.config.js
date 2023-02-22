/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,sass,scss}", "components/**/*.{js,css,sass,scss}"],
  theme: {
    extend: {
      fontFamily: {
        pops: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
