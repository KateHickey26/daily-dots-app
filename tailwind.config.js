/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['"Handlee"', 'cursive'],
                title: ['"Delius"', 'cursive'],
                handwritten: ['"Handlee"', 'cursive'],
                indie: ['"Indie Flower"', 'cursive'],
                coming: ['"Coming Soon"', 'cursive'],
                amatic: ['"Amatic SC"', 'cursive'],
                schoolbell: ['"Schoolbell"', 'cursive'],
                delius: ['"Delius"', 'cursive'],
              },
            animation: {
              'tape-drop': 'tapeDrop 0.6s ease-out forwards',
            },
            keyframes: {
              tapeDrop: {
                '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px) rotate(0deg)',
                },
                '100%': {
                  opacity: '1',
                  transform: 'translateY(0) rotate(var(--tw-rotate))',
                },
              },
            },
          }
    },
    plugins: [],
  }