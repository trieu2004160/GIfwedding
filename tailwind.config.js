/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        serif: ['"Libre Caslon Text"', "serif"],
        sans: ["Inter", "sans-serif"],
        ui: ["Inter", "sans-serif"],
      },

      colors: {
        /* =========================
           GIF WEDDING BRAND
           ========================= */

        brand: {
          DEFAULT: "#d4af37",
          hover: "#b8941f",
          text: "#333333",
          light: "#f5f1df",
        },

        primary: "#d4af37",

        secondary: "#666666",

        tertiary: "#aaaaaa",

        gold: "#d4af37",

        "gold-light": "#ead98b",

        "on-surface": "#111111",

        // Nền website: trắng
        surface: "#ffffff",
      },

      spacing: {
        section: "6rem",
      },
    },
  },

  plugins: [],
};