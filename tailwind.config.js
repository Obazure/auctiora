/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './docs/**/*.html'
  ],
  darkMode: false,
  content: ["./**/*.{html}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway'],
        'serif': ['Raleway'],
        'mono': ['Raleway'],
      },
    },
  },
  plugins: [],
}
