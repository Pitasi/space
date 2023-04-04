/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.forest"),
          },
        },
      }),
      colors: {
        midnight: {
          200: "#FED9FF",
          400: "#8C63FF",
          600: "#321D6A",
          700: "#1D0D42",
        },
        neutral: "#FFFEFE",
        forest: "#144E5A",
        beige: {
          200: "#FEF2E6",
        },
        sun: {
          300: "#FEEBA6",
          400: "#FEDE6C",
        },
        wood: "#BF7D53",
        lightsky: "#C1D5DA",
      },
      data: {
        active: 'active="true"',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
