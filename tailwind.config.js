/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/src/images/heroSection.jpg')",
      },
      fontFamily: {
        myfont: 'Inknut Antiqua',
        secondfont: ['Hanken Grotesk', 'sans-serif'],
        thirdfont: 'Playfair Display',
      },
      colors: {
        bodycolor: '#f7f4e6',
        firstmainColor: '#907433',
        secmaincolor: '#AB8568',
        linkcolor: '#806117',
        favdivbg: '#90743354',
        questioncolor: '#E9EDF680',
        blueLink: '#435EC8',
        lightbrown: '#f5efe0',
        cofeecolor: '#9F7453',
        mygray: '#9F9F9F',
        chocletcolor: '#432719',
      },

    },
  },
  plugins: [],
}

