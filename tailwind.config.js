/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        university: {
          blue: "#0F2A4A",
          gold: "#D6A53A",
          gray: "#F4F6F8"
        }
      }
    }
  },
  plugins: []
};
