/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8c4dff',
          50: '#f7f3ff',
          100: '#efe8ff',
          200: '#dfd1ff',
          300: '#c7adff',
          400: '#aa7aff',
          500: '#8c4dff',
          600: '#7a2fff',
          700: '#6720e0',
          800: '#561cb8',
          900: '#471b94',
        },
        secondary: {
          DEFAULT: '#17b9f5',
          50: '#f2fcff',
          100: '#ddf8ff',
          200: '#b9f1ff',
          300: '#86e6ff',
          400: '#47d4ff',
          500: '#17b9f5',
          600: '#0999d2',
          700: '#0b7baa',
          800: '#11658a',
          900: '#145370',
        },
        utils: {
          sun: '#facc15',
          moon: '#fcd34d',
          laptop: '#f97316',
          location: '#38bdf8',
          education: '#f59e0b',
          availability: '#10b981',
          language: '#a855f7',
        },
      },
    },
  },
  plugins: [],
}
