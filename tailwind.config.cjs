const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-body": theme("colors.eerie"),
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
        neutral: {
          DEFAULT: "#FFFEFE",
        },
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

        //neubrutalism
        seafoam: "#ABE5BC",
        vomit: "#BAFFA3",
        ligthsalmon: "#FFA776",
        jasmine: "#FFD787",
        // violet: "#CFADE8",
        salmon: "#FFA89A",
        // lightviolet: "#F8C3EB",
        // Accent colors for text hierarchies:
        liver: "#505050",
        eerie: "#1E1E1E",
        // Secondary white for base of the app:
        floralwhite: "#FFFAF0",

        // pimp saturation up
        lightviolet: "#ff94f1",
        acid: "#DAFD3C",
        yellow: "#ffef7e;",
        cyan: "#71f2ff",
        violet: "#d67fff",
      },
      data: {
        active: 'active="true"',
      },
      boxShadow: shadows(),
      dropShadow: dropShadows(),
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
      neu: ["var(--font-darker-grotesque)", ...fontFamily.sans],
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

function shadows() {
  const shadows = new Map();
  for (let i = 1; i < 6; i++) {
    let s = "";
    for (let j = 1; j < i + 1; j++) {
      s += `${j}px ${j}px 0px black,`;
    }
    shadows.set(`neu-${i}`, s.slice(0, -1));
  }
  return Object.fromEntries(shadows);
}

function dropShadows() {
  const shadows = new Map();
  for (let i = 1; i < 6; i++) {
    let s = `${i}px ${i}px 0px black`;
    shadows.set(`neu-${i}`, s);
  }
  return Object.fromEntries(shadows);
}

module.exports = config;
