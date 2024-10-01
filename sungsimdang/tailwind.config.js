/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['NotoSans-R', 'sans-serif'],
        secondary: ['MaruBuri-B', 'sans-serif'],
        thirdly: ['Montserrat', 'sans-serif'],
      },

      container : {
        center: true,
        screens: {
          sm: '100%', // sm(640px) 이하
          md: '768px', // md(768px) 이하
          lg: '1024px', // lg(1024px) 이하
          xl: '1280px', // xl(1280px) 이하
          '2xl': '1390px', // 2xl(1536px) 이하
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },

    },
  },
  plugins: [],
}