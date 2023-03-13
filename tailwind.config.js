// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        home: "url('/img/home-bg.jpg')",
        content: "url('/img/content-bg.png')",
      }),
      fontFamily: {
        sans: ['var(--font-dancing-script)', ...fontFamily.sans],
        serif: ['var(--font-crimson-pro)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}
