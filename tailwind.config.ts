import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: "#000000",
        "on-secondary": "#ffffff",
        "on-background": "#191c1e",
        "surface-tint": "#565e74",
        secondary: "#4648d4",
        primary: "#000000",
        surface: "#f7f9fb",
        // ... paste the rest of your custom colors here
      },
      fontFamily: {
        code: ["JetBrains Mono"],
        "headline-lg": ["Inter"],
        "body-md": ["Inter"],
        // ... paste the rest of your fonts here
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;