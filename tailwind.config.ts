import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wolt: "var(--font-omens)",
      },
      colors: {
        "light-gray": "#202125",
        "wolt-blue": "#009DE0",
        "border-gray": "#e4e4e5",
      },
      aspectRatio: {
        wolt: "1 / 0.46",
      },
    },
  },
  plugins: [],
};
export default config;
