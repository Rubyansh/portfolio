// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        animation: {
          'float': 'float 3s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            '0%, 100%': { 
              textShadow: '0 0 10px rgb(139 92 246)',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
            },
            '50%': { 
              textShadow: '0 0 20px rgb(139 92 246), 0 0 30px rgb(110 64 201)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(110, 64, 201, 0.3)'
            },
          }
        },
      },
    },
    plugins: [],
  }