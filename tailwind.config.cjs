/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#1da1f2',
        dark :"#1a9ada" ,
        light:"#a5d0f5",
        lights:"#D4E5F4",
      }
    },
  },
  plugins: [],
}
