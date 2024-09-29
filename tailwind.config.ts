import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ravenPrimary: "#5753C6",
        buttonDarkGray: "#222326",
        backgroundLight: "#F8F9FA",
        backgroundLighter: "#FDFDFE",
        backgroundDark: "#1C1D1F",
        backgroundDarker: "#18191b",
        borderAccent: "#494b50",
        borderAccentDark: "#2c2d30"
      },
      fontFamily: {
        calsans: ['Cal Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
