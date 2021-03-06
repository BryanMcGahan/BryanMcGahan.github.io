module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat']
      },
      colors:{
        'primary':"#e54545"
      },
      height:{
        'menu':'100vh - 50px'
      },
      display:["group-hover"],
      fontSize:{
        'xxs':'.50rem'
      },

      animation: {
        fadeIn:"fadeIn 1.5s ease-in forwards"
      },
      keyframes:{
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        }
      },

      screens:{
        'ultrawide':"2000px"
      }
    },

  
  },
  plugins: [],
}
