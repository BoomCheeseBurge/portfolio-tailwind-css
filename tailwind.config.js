/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
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
      boxShadow: {
        'custom': 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [require('./src/custom-plugins/custom-gradient')],
}
