/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        },
      backgroundImage: {
        bg_hero_one: 'url("assets/recipe-hero-images.png")'
      }
       },
    plugins: [],
  }
}

