module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "0rem",
    },
    screens: {
      'xs': '375px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#ffffff", 
      pwxBlue: "#5463A5",
      pwxBlueLight: "#dcdfed",
      grey90: "#232129",
      grey50: "#78757a",
      grey10: "#f1f1f1",
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
