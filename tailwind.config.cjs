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
      backgroundImage: {
        "pattern-hideout":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "pattern-plus":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "pattern-wave":
          "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
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
