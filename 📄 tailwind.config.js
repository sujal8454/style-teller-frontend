/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4B36A",
        beige: "#F5EBDD",
        cream: "#FFF7EB"
      }
    }
  },
  plugins: []
}