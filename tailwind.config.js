/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Keep jsx here
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-green': '#16a34a',
        'brand-green-dark': '#15803d',
        'brand-gold': '#ca8a04',
        'brand-light-bg': '#f0f4f2',
        'brand-dark': '#222222',
      },
      fontFamily: {
        // sans: ['"Your Font Name"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}