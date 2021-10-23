module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        lightStrongCyan: 'hsl(172, 67%, 80%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        darkGrayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        lightGrayishCyan: 'hsl(189, 41%, 97%)',
        whiteCustom: 'hsl(0, 0%, 100%)'
      },
      backgroundColor: ['active'],
      filter: ['hover', 'focus'],
      brightness: ['hover', 'focus'],
    },
    fontFamily: {
      monospace: ['Space Mono', 'monospace'],
    },
    
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
