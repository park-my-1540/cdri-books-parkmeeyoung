/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4880EE',
        red: '#E84118',
        gray: '#DADADA',
        lightGray: '#F2F4F6',
        white: '#FFFFFF',
        black: '#222222',
        textPrimary: '#353c49',
        textSecondary: '#6d7582',
        textSubtitle: '#8d94a0',
      },
    },
  },
  plugins: [],
};

