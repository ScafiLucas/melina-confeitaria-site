import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Paleta Confeitaria - Papel Craft & Chocolate
        craft: {
          50: '#fdfcfb',
          100: '#faf7f2',
          200: '#f5f0e8',
          300: '#ede4d3',
          400: '#e0d1b8',
          500: '#d4c4a8',
          600: '#c2ad8e',
          700: '#a08866',
          800: '#7d6a4f',
          900: '#5e5140',
        },
        chocolate: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#dfd3c3',
          300: '#c9b5a0',
          400: '#a88b6f',
          500: '#8b6f47',
          600: '#6f5436',
          700: '#5a432b',
          800: '#4a3724',
          900: '#3d2e1e',
          950: '#2a1f15',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
