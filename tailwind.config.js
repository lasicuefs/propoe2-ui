/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['Cardo', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      keyframes: { 
        rotate: { 
          '0%': { transform: 'rotate(0deg)' }, 
          '100%': { transform: 'rotate(360deg)' 

          }, 
        } 
      }, 
      animation: { 
        'spin-infinite': 'rotate 100s linear infinite', 
      }
    },
  },
  plugins: [],
}

