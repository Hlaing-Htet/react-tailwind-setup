/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      brandColor1: "#3A7AD5",
      brandColor2: "#092852",
      white: "#ffffff",
      grey1: "#F5F5F5",
      grey2: "#EAEAEA",
      grey3: "#CCCCCC",
      grey4: "#B4B4B4",
      black: "#000000",
      black1: "#1E1E1E",
      black2: "#333333",
      pending: "#DAC508",
      error: "#EA180B",
      activeGreen: "#07B218",
      acitveBlue: "#0643B9",
    },
    extend: {
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
        "fake-in": "fakeIn 0.3s ease ",
        "fake-out": "fakeOut 0.3s ease ",
        "high-in": "highIn 0.2s ease ",
        "high-out": "highOut 0.2s ease ",
      },
    },
  },
  plugins: [],
};
