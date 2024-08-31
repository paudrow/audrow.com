import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#3A7E99",
          "light-100": "#7ECCEB",
          "light-800": `#1A4A5D`,
          dark: "#7ECCEB",
        },
      },
    },
  },
} satisfies Config;
