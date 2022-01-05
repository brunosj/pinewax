module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/icons/**/*.{html,js,jsx,ts,tsx}",  
  ],
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
      black: "#000000",
      pwxBlue: "#4349F6",
      pwxBlueLight: "#dcdfed",
      grey90: "#232129",
      grey50: "#78757a",
      grey30: "#dcdcdc",
      grey20: "#d9d9d9",
      grey10: "#f7f7f7",
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
    extend: {
      fontFamily: {
        faune: ['faune'],
        franklin: ['franklin'],
        space: ['space'],
        dm: ['dm'],
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
