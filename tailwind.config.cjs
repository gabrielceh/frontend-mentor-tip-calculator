/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        veryDarkCyan: { DEFAULT: '#00494d' },
        darkGrayCyan: { DEFAULT: '#5e7a7d' },
        grayCyan: { DEFAULT: '#7f9c9f' },
        customCyan: { DEFAULT: '#27c2ae' },
        darkCyan: { DEFAULT: '#00474a' },
        lightGrayCyan: { DEFAULT: '#c5e4e7' },
        veryLightGrayCyan: { DEFAULT: '#f4fafa' },
        white: { DEFAULT: '#ffffff' },
        mint: { DEFAULT: '#9fe8df' },
      },
    },
  },
  plugins: [],
};
