import type { Config } from "tailwindcss";

export default {
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
        customSky: '#C3EBFA',
        customSkyLight: '#EDF9FD',
        customPurple: '#CFCEFF',
        customPurpleLight: '#F1F0FF',
        customYellow: '#FAE27C',
        customYellowLight: '#FEFCE8'
      },
    },
  },
  plugins: [],
} satisfies Config;
