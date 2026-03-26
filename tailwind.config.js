/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#347A48',
        secondary: '#E26F3B',
        accent: '#E19D4A',
        light: '#FFF7A2',
      },
    },
  },
  plugins: [],
}