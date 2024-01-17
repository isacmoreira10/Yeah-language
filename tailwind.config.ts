import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "animation-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        "overlay-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.8" },
        },
        "modal-content-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "modal-content-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        loading: {
          "0%, 100%": { rotate: "0deg" },
          "50%": { rotate: "0 4 3 -15deg" },
        },
      },
      animation: {
        "overlay-fade-in": "overlay-fade-in 0.5s ease-in-out ",
        "modal-content-fade-in": "modal-content-fade-in 0.5s ease-in-out",
        "modal-content-fade-out": "modal-content-fade-out 0.5s ease-in-out",
        "animation-pulse": "animation-pulse 0.5s linear",
        loading: "loading 1s linear infinite",
      },
      boxShadow: {
        "button-primary": "0px 4px 0px 0px #489D26;",
        "button-secondary": " 0px 2px 0px 0px #E1E1E1;",
        "button-error": "0px 4px 0px 0px #EE282D;",
        "tag-blue": "0px 4px 0px 0px #1899D6;",
      },
      colors: {
        ...colors,
        "gray-primary": "#E1E1E1",
        "gray-secondary": "#A6A6A6",
        "green-primary": "#58CC02",
        "green-dark": "#35B023",
        "green-secondary": "#42C62F",
        "purple-primary": "#CE82FF",
        "red-light": "#FFDADC",
        "red-dark": "#EE282D",
        "error-button": "#FF4347",
        success: "#D7FFB8",
        blue: {
          primary: "#1CB0F6",
        },
        units: {
          green: "#00CD9C",
          "orange-ready": "#CC6302",
          "orange-not-ready": "#CA8E57",
        },
      },
    },
  },
  plugins: [],
};
export default config;
