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
                'bunting-drop': 'bunting-drop 1s ease-out forwards',
                'calendar-slide': 'calendar-slide 1s ease-out forwards',
                'tape-drop': 'tape-drop 2s ease-out forwards',
              },
            keyframes: {
              'bunting-drop': {
                '0%': { transform: 'translateY(-100%) rotate(-5deg)' },
                '100%': { transform: 'translateY(0) rotate(-5deg)' },
              },
              'calendar-slide': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0)' },
              },
              'tape-drop': {
                '0%': { transform: 'translateY(-10px)', opacity: 1 },
                '100%': { transform: 'translateY(0)', opacity: 1 }, // Keep opacity steady
              },
            },
          }
    },
    plugins: [],
  }