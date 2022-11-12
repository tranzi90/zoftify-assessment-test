/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#EBEEF6",
        "background-secondary": "#F5F6FA",
        "color-secondary": "#667281",
        "icon-tertiary": "#B2C2DF",
        "primary-blue": "#177EFF",
        "primary-blue-light": "#70AEFD",
        "text-primary": "#111",
      }
    },
  },
  plugins: [],
}
