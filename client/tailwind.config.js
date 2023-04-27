/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        onHover: {
          transform: 'translateY(0px)',
          opacity: 1
        }
      }
    },
  },
  plugins: [],
}