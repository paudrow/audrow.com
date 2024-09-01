import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkmode: {
          heading: colors.zinc[100],
          text: colors.zinc[400],
          "text-hover": colors.zinc[300],
          "bg-background": colors.black,
          "bg-foreground": colors.zinc[900],
          "bg-ring": colors.zinc[700],
          "accent-500": "#7ECCEB",
        },
        lightmode: {
          heading: colors.zinc[900],
          text: colors.zinc[600],
          "text-hover": colors.zinc[700],
          "bg-background": colors.zinc[100],
          "bg-foreground": colors.zinc[50],
          "bg-ring": colors.zinc[200],
          "accent-100": "#7ECCEB",
          "accent-500": "#3A7E99",
          "accent-800": "#1A4A5D",
        },
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
