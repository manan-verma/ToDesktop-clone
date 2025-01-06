/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2',
        'manan': '#dddddd',
      },

      fontFamily:{
        'display':['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']  
      }
    },
  },
  plugins: [],
}

