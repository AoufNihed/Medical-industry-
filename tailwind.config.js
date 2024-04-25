/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#232323",
          "200": "#1b2130",
          "300": "#030410",
          "400": "rgba(255, 255, 255, 0.2)",
          "500": "rgba(0, 0, 0, 0.3)",
          "600": "rgba(255, 255, 255, 0.06)",
          "700": "rgba(255, 255, 255, 0.3)",
          "800": "rgba(255, 255, 255, 0.9)",
          "900": "rgba(255, 255, 255, 0.7)",
        },
        deepskyblue: "#38b6ff",
        cornflowerblue: {
          "100": "#3b99fa",
          "200": "#26a1ff",
          "300": "#1f9ce6",
          "400": "#287ecc",
        },
        whitesmoke: "#f9f9f9",
        white: "#fff",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d9d9d9",
          "300": "rgba(224, 224, 224, 0.09)",
        },
        royalblue: "#367aff",
        dimgray: "#6c6c6c",
        darkgray: {
          "100": "#acacac",
          "200": "#9a9a9a",
          "300": "#959595",
        },
        primary: "#1572d3",
        silver: "#b6b6b6",
        darkslategray: {
          "100": "#3e3e3e",
          "200": "#272c46",
        },
        "secondary-blue": "#007aff",
        lightskyblue: "#afbdff",
        "grey-06": "#f2f4f6",
        "secondary-red": "#ff6252",
        "secondary-green": "#2ac670",
        "grey-01": "#09244b",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        outfit: "Outfit",
      },
      borderRadius: {
        "49xl": "68px",
        "29xl": "48px",
        "6xl": "25px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      xl: "20px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      sm: "14px",
      base: "16px",
      "3xl": "22px",
      "2xl": "21px",
      mid: "17px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      lg: "18px",
      "48xl": "67px",
      "35xl": "54px",
      "21xl": "40px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
