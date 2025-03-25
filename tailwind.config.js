/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          paper: '#fdfaf6',
          ink: '#2e2e2e',
          accent: '#d4a373',
        },
        fontFamily: {
          handwritten: ['"Patrick Hand"', 'cursive'],
        },
      },
    },
    plugins: [],
  }