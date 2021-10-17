// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
     disc: 'disc',
     square: 'square',
     roman: 'upper-roman',
    },
    fontSize:{
      'xs': '.75rem',
       'sm': '.875rem',
       'md': ".930rem",
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
    },
    extend: {
      margin: {
        88: "22rem",
      },
      height: {
        88: "22rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
