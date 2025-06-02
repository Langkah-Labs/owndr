/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx}', // folder app (file-based routing)
    './components/**/*.{js,ts,jsx,tsx}', // komponen UI
    './lib/**/*.{js,ts,jsx,tsx}', // helper / libs
    './stores/**/*.{js,ts,jsx,tsx}', // state management
    './utils/**/*.{js,ts,jsx,tsx}', // util functions
    './workers/**/*.{js,ts,jsx,tsx}', // cloudflare workers
    './public/**/*.html', // asset HTML di public
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: '', max: '420px' },
        sm: { min: '421px', max: '650px' },
        md: { min: '651px', max: '1024px' },
        lg: { min: '1025px', max: '' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
