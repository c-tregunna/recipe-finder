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
      },
      colors: {
        'slate-rgba': 'rgba(226, 232, 240, .70)',
      }
       },
    plugins: [],
  }
}

