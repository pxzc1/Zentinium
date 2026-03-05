/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./web/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        flex: ['"Google Flex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}