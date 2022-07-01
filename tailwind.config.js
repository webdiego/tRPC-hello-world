/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        org: 'Org',
        street: 'Street',
        jungle: 'Jungle',
        ka: 'Ka',
        plastic: 'Plastic',
        baloon: 'Baloon',
      },
    },
  },
  plugins: [],
};
