/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vuejs: {
          100: "#17eb50",
          200: "#16eb50",
        },
      },
    },
  },
  plugins: [],
};
