module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f5f8fb",
          100: "#f3f4f6",
          200: "#f3f0f0",
          300: "#dbe2ef",
          400: "#c1c1c1",
          600: "#757575",
          700: "#666666",
          "100_01": "#f8f4f4",
          "200_01": "#efefef",
          "100_05": "#f6f1f1",
          "100_03": "#faf6f6",
          "100_04": "#f5f5f5",
          "600_01": "#767676",
          "900_01": "#111827",
          "100_02": "#f6f5f5",
          "200_02": "#eaeaea",
        },
        white: { A700_01: "#ffffff", A700: "#fffefe" },
        black: { 900: "#000000" },
        indigo: { 800: "#1b4679", A700: "#314cdc", "800_01": "#1b467a" },
        blue_gray: { 100: "#d9d9d9", 900: "#112d4e" },
        blue: { 800: "#1d4ed8", A200: "#3b82f6" },
        red: { A400: "#ff0b28", A700_01: "#f20a0a", A700: "#f90909" },
        amber: { A700: "#fba808" },
        light_green: { A700: "#27df09" },
      },
      boxShadow: {
        xs: "1px 1px  5px 0.2px #00000035",
        sm: "0px 4px  14px 0px #00000019",
        md: "0px 4px  4px 0px #0000003f",
        lg: "0px 2px  4px -2px #00000019",
        xl: "4px 0px  10px 0px #0000003f",
        bs: "inset 0px 4px  4px 0px #0000003f",
      },
      fontFamily: { roboto: "Roboto", inter: "Inter", montserrat: "Montserrat", saira: "Saira", segoeui: "Segoe UI" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
