/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        latte: {
          100: "#FFFBE7",
        },
        maize: {
          100: "#FFEB87",
          200: "#FFE97B",
          300: "#FFE76F",
          400: "#FFE563",
          500: "#FFEA4A",
          600: "#FFDF3E",
          700: "#FFDB26",
          800: "#FFD70D",
        },
        drab: {
          300: "#927C3A",
          400: "#7C6931",
          500: "#665729",
          600: "#504420",
          700: "#3C3318",
          800: "#362E16",
          900: "#272110",
        },
        penn: {
          100: "#4F57CF",
          200: "#3942C9",
          300: "#313AB4",
          400: "#2B339E",
          500: "#252C88",
          600: "#1F2572",
          700: "#191D5C", //
          800: "#171C56",
          900: "#16194F",
        },
      },
      data: {
        active: 'active="true"',
      },
    },
  },
  plugins: [],
};

module.exports = config;
