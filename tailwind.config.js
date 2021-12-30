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
      }
    },
  
  },
  plugins: [],
}
