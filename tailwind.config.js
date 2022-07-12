/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        //Primary
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkCyan: 'hsl(167, 40%, 24%)', //graphic design text
        darkBlue: ' hsl(198, 62%, 26%)', //photography text
        moderateCyan: 'hsl(168, 34%, 41%)', //footer
        //Neutral
        vdBlue: ' hsl(212, 27%, 19%)',
        vdGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        white: 'hsl(0, 0%, 100%)',
        hoverGray: 'hsla(0, 0%, 100%,0.1)', 
      },
    },
  },
  plugins: [],
};
