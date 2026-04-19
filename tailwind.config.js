/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-blue': '#0f4c81',
        'safety-yellow': '#FFD700',
        'steel-grey': '#f8fafc',
        'dark-slate': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        header: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
