/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
          primary: '#14b8a6',
          dark: '#0f172a',
          light: '#64748b',
          lighter: '#94a3b8',
      },
      screens: {
        '2xl' : '1320px'
      },
    },
  },
  plugins: [require('./src/custom-plugins/custom-gradient')],
}
