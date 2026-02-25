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
        primary: {
          50:  '#f9fdea',
          100: '#f2fbd2',
          200: '#e6f7a6',
          300: '#d8f173',
          400: '#cdef45',
          500: '#C9F31E',  // main brand color
          600: '#aed917',
          700: '#8fb512',
          800: '#72910e',
          900: '#5c760c',
          950: '#2f3d06',
        },
        dark: {
          50:  '#ffffff',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#131313',  // main dark tone
          600: '#101010',
          700: '#0d0d0d',
          800: '#0a0a0a',
          900: '#080808',
          950: '#050505',
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
