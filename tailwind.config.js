/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // custom palette
        navy: "#0b1220",
        deep: "#0d1b2a",
        accent: "#08a0ff",
        softblue: "#0ea5f6"
      },
      borderRadius: {
        'xl-2': '1.25rem'
      }
    },
  },
  plugins: [],
}