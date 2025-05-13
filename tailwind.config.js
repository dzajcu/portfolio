/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wordSlider: {
          "0%": { transform: "translateY(0%)" },
          "33.3%": { transform: "translateY(-100%)" },
          "66.6%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        wordSlider: "wordSlider 6s infinite",
      },
    },
  },
  plugins: [],
};
