/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4eef8',
          100: '#e9ddf1',
          200: '#d3bbe3',
          300: '#bd99d5',
          400: '#a777c7',
          500: '#7e509c',
          600: '#6a4383',
          700: '#56366a',
          800: '#422952',
          900: '#2e1c39',
        },
        background: {
          DEFAULT: '#ffffff',
          secondary: '#ede5de',
          accent: '#faf8f6',
        }
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        '3d': '0 20px 60px -10px rgba(126, 80, 156, 0.3), 0 10px 20px -5px rgba(126, 80, 156, 0.2)',
      }
    },
  },
  plugins: [],
}

