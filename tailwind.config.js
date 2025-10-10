/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '38': '9.5rem', // 152px for slot window height
        '50': '12.5rem', // 200px for slot window width
        '70': '17.5rem', // 280px for slot machine frame width
        '80': '20rem', // 320px for slot machine frame height
      },
      animation: {
        'slot-spin': 'slotSpin 3s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'blink': 'blink 0.8s infinite alternate',
        'pulse-custom': 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        slotSpin: {
          '0%': { transform: 'translateY(0)' },
          '85%': { transform: 'translateY(-4200px)' },
          '100%': { transform: 'translateY(-4350px)' },
        },
        blink: {
          '0%': { 
            opacity: '0.3',
            boxShadow: '0 0 5px #f97316'
          },
          '100%': { 
            opacity: '1',
            boxShadow: '0 0 20px #f97316, 0 0 30px #ea580c'
          },
        },
      },
      colors: {
        'slot-gray': {
          100: '#f0f0f0',
          200: '#e8e8e8',
          300: '#eeeeee',
          400: '#dcdcdc',
          500: '#e6e6e6',
        }
      },
      boxShadow: {
        'slot-frame': '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 5px 10px rgba(255, 255, 255, 0.1)',
        'slot-window': 'inset 0 5px 15px rgba(0, 0, 0, 0.8)',
        'slot-number': 'inset 2px 2px 5px rgba(255, 255, 255, 0.8), inset -2px -2px 5px rgba(0, 0, 0, 0.2)',
      },
      textShadow: {
        'slot': '1px 1px 0px #ffffff, 2px 2px 3px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-slot': {
          textShadow: '1px 1px 0px #ffffff, 2px 2px 3px rgba(0, 0, 0, 0.3)',
        },
      })
    }
  ],
}