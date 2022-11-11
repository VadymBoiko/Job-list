/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens:{
      lg: '1920px',
      sm: '414px'
    },
    container:{
      padding: '9px',
      center: true
    },
    extend: {
     backgroundColor:{
        bgbody: '#E6E9F2',
        bgcard: '#EFF0F5'
      },
      colors:{
        darkness: '#3A4562',
        lightness: '#878D9D'
      },
      width:{
        97: '414px'
      }
    },
  },
  plugins: [],
}
