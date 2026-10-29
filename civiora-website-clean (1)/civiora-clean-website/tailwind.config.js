/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2A54',
          50: '#EAF0F8',
          100: '#CFDCEE',
          200: '#9FB9DD',
          300: '#6F96CC',
          400: '#3F73BB',
          500: '#1E4E8F',
          600: '#153A6B',
          700: '#0B2A54',
          800: '#081F3E',
          900: '#051428',
          950: '#030D1A',
        },
        gold: {
          DEFAULT: '#C9962A',
          50: '#FBF4E4',
          100: '#F5E6C4',
          200: '#EBCD89',
          300: '#E0B54E',
          400: '#D4A639',
          500: '#C9962A',
          600: '#A67A20',
          700: '#7D5C18',
          800: '#543D10',
          900: '#2B1F08',
        },
        ink: '#0E1B2C',
        mist: '#F6F8FB',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drawLine: 'drawLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
