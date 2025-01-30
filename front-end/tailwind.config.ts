import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sizeColor: "#121E26",
        secondary: "#1C6C8C",
        accent: "#35D0F2",
        highlight: "#38E0F2",
        lightGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
