/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      // colors: {
      //   blue: {
      //     light: '#85d7ff',
      //     DEFAULT: '#1fb6ff',
      //     dark: '#009eeb',
      //   },
      //   pink: {
      //     light: '#ff7ce5',
      //     DEFAULT: '#ff49db',
      //     dark: '#ff16d1',
      //   },
      //   gray: {
      //     darkest: '#1f2d3d',
      //     dark: '#3c4858',
      //     DEFAULT: '#c0ccda',
      //     light: '#e0e6ed',
      //     lightest: '#f9fafc',
      //   }
      // },
      fontFamily: {
        sans: ['Graphik', 'Arial', 'sans-serif'],
      },
      // backgroundColor: {
      //   DEFAULT: '#010E19'
      // },
      extend: {
        flexGrow: {
          2: '2',
          3: '3',
        },
        zIndex: {
          60: '60',
          70: '70',
          80: '80',
          90: '90',
          100: '100',
        },
      }
    },
  plugins: [],
}
