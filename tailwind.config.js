module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        4.5: "1.125rem",
      },
      maxWidth: {
        s: "23.4375rem",
      },
      height: {
        4.5: "1.125rem",
      },
      spacing: {
        4.5: "1.125rem",
      },
      gridColStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      colors: {
        mystic: {
          DEFAULT: "#E4E8F1",
          dark: "#545860",
        },
        shark: { DEFAULT: "#2B2E35", dark: "#181A1E" },
        supernova: { DEFAULT: "#FFCC01", dark: "#EDBD00" },
        BG: "#F8F8F8",
        success: "#26B702",
        error: "#FF7878",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
