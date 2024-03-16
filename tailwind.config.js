/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1400px",
  },
  plugins: [],
};
