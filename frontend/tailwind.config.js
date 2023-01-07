/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,tsx}"],
  theme: {
    extend: {
        colors: {
            'hippo-dark':'#000017',
            'hippo-semi-dark':'#16003a',
        }
    },
  },
  plugins: [],
}
