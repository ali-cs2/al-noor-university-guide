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
          navy: "#0B1F4D",
          royal: "#123A7A",
          burgundy: "#9B111E",
          gold: "#C9A227",
          gray: "#F4F6F8",
          blueGray: "#EAF0F6"
        }
      },
      boxShadow: {
        academic: "0 4px 12px rgba(11, 31, 77, 0.05)",
        "academic-lg": "0 8px 24px rgba(11, 31, 77, 0.10)"
      }
    }
  },
  plugins: []
};
