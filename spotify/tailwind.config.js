/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: "#57B660",
          light: "#FFFFFF",
          dark: "#181414",
        },
        decorative:{
          blueMoon: "#649AED",
          redRedWine: "#EB5640",
          mellowYellow: "#F6C874",
          whiterShadeOfPale: "#A7C2D1",
          everGreen: "#D5F479",
          prettyInPink: "#F7CFD4",
          pinkMoon: "#E57BA1",
          yellowSubmarine: "#F4E357"
        },
        greys:{
          0: 'rgba(255, 255, 255, 0.04)',
          1: 'rgba(255, 255, 255, 0.08)',
          2: 'rgba(255, 255, 255, 0.12)',
          3: 'rgba(255, 255, 255, 0.20)',
          4: 'rgba(255, 255, 255, 0.30)',
          5: 'rgba(255, 255, 255, 0.40)',
          6: 'rgba(255, 255, 255, 0.50)',
        }
      }
    },
  },
  plugins: [],
}

