module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        heading: '480px',
       },
       animation: {
        'bounce-slow': 'bounce 1.5s infinite',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
