import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "7rem",
      },
    },
    extend: {
      backgroundImage: {},
      gridTemplateColumns: {},
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      inset: {},
      padding: {},
      height: {},
      margin: {},
      borderRadius: {},
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        label: "clamp(1rem, 1vw + 1.31rem, 1.2rem)",
        "sub-title": "clamp(1rem, 1.56vw + 1.56rem, 1.25rem)",
        title: "clamp(2rem, 2vw + 1.85rem, 2rem)",
        features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        section: "clamp(1rem, 2vw + 2rem, 2rem)",
        hero: "clamp(4.15rem, 5vw + 1rem, 1rem)",
      },
      colors: {
        primary: {
          "50": "#BCA4C6",
          "100": "#B380C8",
          "200": "#AC61CB",
          "300": "#00aeef",
          "400": "#DEE1F8",
          "500": "#A53ECF",
          "600": "#9E72C3",
          "700": "#924D8F",
          "800": "#7338A0",
          "900": "#4A2574",
          "950": "#2A2D7B",
        },
        secondary: {
          "50": "#ecfdf9",
          "100": "#d1faf0",
          "200": "#a7f3e1",
          "300": "#6ee7ca",
          "400": "#34d3ad",
          "500": "#10b991",
          "600": "#9E72C3",
          "700": "#924D8F",
          "800": "#7338A0",
          "900": "#4A2574",
          "950": "#ffffff",
        },
        neutral: {
          "50": "#F5FAF9",
          "100": "#EDF2F1",
          "200": "#D9DEDD",
          "300": "#C7CFCD",
          "400": "#AEB5B4",
          "500": "#929C9A",
          "600": "#7F8786",
          "700": "#737A79",
          "800": "#646A69",
          "900": "#4C524F",
          "950": "#1D1F1E",
        },
        beige: {
          primary: "#FFF7ED",
        },
      },
      width: {},
      gap: {},
    },
  },
  plugins: [],
};
export default config;
