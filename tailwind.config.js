/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      lg: '1920px',
      sm: '414px'
    },
    container: {
      center: true
    },
    extend: {
      backgroundColor: {
        bgbody: '#E6E9F2',
        bgcard: '#EFF0F5'
      },
      boxShadow: {
        'box': '2px 1px 7px rgba(0, 0, 0, 0.08) ,0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      width: {
        97: '414px'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
      },
      listStyleType: {
        square: 'square'
      }
    },
  },
  plugins: [],
}
