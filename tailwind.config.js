/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#403F3F',
        'second': '#706F6F',
        'third': '#9F9F9F'
      }
    },
  },
  plugins: [],
}

