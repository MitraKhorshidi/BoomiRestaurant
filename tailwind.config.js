module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '540' : '540px',
        '287' : '287px',
        '440' : '440px',
      },
      height:{
        '338' : '338px' ,
        '169' : '169px',
        '600' : '600px',
      },
      inset:{
        '550' : '550px',
      },
      colors:{
        'title' :'#0E302F' ,
      },
    },
  },
  plugins: [],
}
