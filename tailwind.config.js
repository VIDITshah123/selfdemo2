/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#1a0204',
          900: '#260306',
          850: '#380509',
          800: '#580b12',
          750: '#6b0f17',
          700: '#7e131d',
          600: '#991924',
        },
        gold: {
          300: '#f0dbaf',
          400: '#dfbe78',
          500: '#c5a059',
          600: '#a7823b',
          700: '#886526',
        },
        sand: {
          50: '#fbf9f6',
          100: '#ede0d4',
          300: '#cfbda9',
          500: '#9e8a77',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spinSlow 20s linear infinite',
        'fade-in': 'fadeInSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeInSlide: {
          from: { opacity: '0', transform: 'translateY(15px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
