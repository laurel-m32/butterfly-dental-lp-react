/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8aac78',
          dark: '#6d8c5e',
          light: '#a8c89a',
        },
        accent: '#004a59',
      },
      fontFamily: {
        sans: ['Maven Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
