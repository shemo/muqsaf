const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: "#13A69A",
      secondary: "#43C074",
      "secondary-darker": "#217662",
      "secondary-lighter": "#1AD598",
      "primary-lighter": "#0FA59A",
      "primary-lightest": "#E8F8F7",
      cyan: {
        50: "#C6E6E4",
        100: "#AEECE7",
      },
      gray: {
        20: "#F5F5F5",
        30: "#CCCCCC",
        50: "#B4B4B4",
        100: "#E9EBEF",
        200: "#818181",
        300: "#363636",
        400: "#242424",
        500: "#707070",
        600: "#3F4047",
        800: "#1C1D21",
        900: "#2A2B31",
        1000: "#26272B",
      },
      red: {
        100: "#EA3A3D",
        500: "#D01844",
      },
      yellow: {
        100: "#F2B83F",
        500: "#746C40",
      },
      green: {
        500: "#6DA544",
      },
    },
    fontFamily: {
      "sst-medium": "sst-medium",
      "careem-bold": "careem-bold",
      "careem-regular": "careem-regular",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "orange-100": "#FFC85A",
      "orange-500": "#FF9900",
      "cyan-100": "#53BAFF",
      "cyan-500": "#0C75EC",
      "cyan-900": "#13A69A",
      "cyan-1000": "#245550",
    }),
    extend: {
      backgroundImage: {
        // "chevron-down": "url('@/assets/img/chevron-down.svg')",
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        xxs: "0.625rem",
        55: "55rem",
      },
      opacity: {
        80: ".8",
        44: ".44",
      },

      zIndex: {
        2: 2,
        3: 3,
        100: 100,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
        "650-px": "650px",
        "700-px": "700px",
        "750-px": "750px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        "50%": "50%",
        16: "1rem",
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: "0.3rem",
          textAlign: "center",
          fontFamily: "careem-bold",
          fontSize: "1rem",
        },
        ".btn-primary": {
          backgroundColor: "#2962FF",
          color: "#fff",
          border: "1px solid #2962FF",
          "&:hover": {},
        },
        ".btn-secondary": {
          backgroundColor: "transparent",
          color: "#FBFBFD",
          border: "1px solid #2962FF",
          "&:hover": {},
        },
        ".btn-disabled": {
          opacity: 0.5,
        },
      };

      addComponents(buttons);
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
