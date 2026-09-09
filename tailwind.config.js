/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Libre Caslon Text"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#8C1515',
          hover: '#731010',
          text: '#333333',
          light: '#f5f5f5',
        }
      },
      spacing: {
        'section': '6rem',
      }
    },
  },
  plugins: [],
}
