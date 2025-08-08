/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        ivory: "#FAF7F1",
        ink: "#111111",
        blueRose: "#6E8FB7",
        deepBlue: "#415B7A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(17,17,17,0.06)",
        card: "0 12px 40px rgba(17,17,17,0.08)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      }
    },
  },
  plugins: [],
};
