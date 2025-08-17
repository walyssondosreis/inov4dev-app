/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // cobre tudo
  ],
  theme: {
    extend: {
      fontFamily: {
        jhetegral: ['jonathan-hetegral', 'sans-serif'],
        nexal: ['nexa-light', 'sans-serif'],
        nexah: ['nexa-heavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
