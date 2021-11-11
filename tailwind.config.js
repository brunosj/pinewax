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
      black: "#000000",
      pwxBlue: "#5463A5",
      pwxBlueLight: "#dcdfed",
      grey90: "#232129",
      grey50: "#78757a",
      grey30: "#dcdcdc",
      grey20: "#d9d9d9",
      grey10: "#f7f7f7",
      room407: "#DA92AA",
      early: "#645B9E",
      lfts: "#FFE961",
      sw: "#BE2C2F",
      sw_instru:"#BE2C2F",
      gettingBy: "#EBD4C2",
      erpel: "#000000",
      samba: "#FFFFFF",
      gaggia: "#B4C5DF",
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
    extend: {
        opacity: ["responsive", "hover", "focus", "group-hover"],
        display: ["responsive", "hover", "focus", "last"],
        transform: ["group-hover"],
        translate: ["group-hover"],
        scale: ["group-hover"],
    },
  },
  plugins: [],
}
