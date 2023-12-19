/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xxl': {'max': '1535px'},
        'xxl': {'max': '1279px'},
        'lgg': {'max': '1024px'},
        'mdd': {'max': '800px'},
        'ssm': {'max': '639px'},
      },
      colors: {
        page: "#1E1E1E",
        greenAccent: {
          400: "#D8FF99",
          500: "#9eff00",
          600: "#7ecc00",
          700: "#5f9900",
          800: "#3f6600",
          900: "#203300"
        },
        greyAccent: {
          300: "#E6E6E6",
          400: "#262626",
          500: "#1a1a1a",
          600: "#484848",
          700: "#767676",
          800: "#a3a3a3",
          900: "#d1d1d1",
        },
      }
    },
  },
  plugins: [],
}

