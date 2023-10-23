/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        primary: "#3A7AD5",
        secondary: "#1D4966",
        white: "#ffffff",
        grey1: "#F5F5F5",
        grey2: "#EAEAEA",
        grey3: "#CCCCCC",
        grey4: "#B4B4B4",
        black: "#000000",
        black1: "#111111",
        black2: "#1E1E1E",
        black3: "#333333",
        yellow: "#DAC508",
        red: "#EA180B",
        green: "#07B218",
        blue: "#0643B9",
      },
      keyframes: {
        topIn: {
          "0%": { transform: "translateY(-400%)" },
          "100%": { transform: "translateY(0)" },
        },
        topOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-400%)" },
        },
        rightIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        rightOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        leftIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        leftOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fakeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fakeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        highIn: {
          "0%": { height: 0 },
          "100%": { height: 100 },
        },
        highOut: {
          "0%": { height: 100 },
          "100%": { height: 0 },
        },
      },

      animation: {
        "top-in": "topIn 0.3s ease ",
        "top-out": "topOut 0.3s ease ",
        "right-in": "rightIn 0.3s ease ",
        "right-out": "rightOut 0.3s ease ",
        "left-in": "leftIn 0.3s ease ",
        "left-out": "leftOut 0.3s ease ",
        "fake-in": "fakeIn 0.3s ease ",
        "fake-out": "fakeOut 0.3s ease ",
        "high-in": "highIn 0.2s ease ",
        "high-out": "highOut 0.2s ease ",
      },
    },
  },
  plugins: [],
};
