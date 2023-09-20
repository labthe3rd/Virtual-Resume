// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            divider: "rgba(17, 17, 17, 0.15)",
            focus: "#006FEE",
            content: {
              1: "#FFFFFF",
              2: "#f4f4f5",
              3: "#e4e4e7",
              4: "#d4d4d8",
            },
            default: {
              foreground: "#FFFFFF",
              DEFAULT: "#d4d4d8",
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
            },
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#006FEE",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
            },
            secondary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#9353d3",
              50: "#f2eafa",
              100: "#e4d4f4",
              200: "#c9a9e9",
              300: "#ae7ede",
              400: "#9353d3",
              500: "#7828c8",
              600: "#6020a0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
            },
            success: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#17c964",
              50: "#e8faf0",
              100: "#d1f4e0",
              200: "#a2e9c1",
              300: "#74dfa2",
              400: "#45d483",
              500: "#17c964",
              600: "#12a150",
              700: "#0e793c",
              800: "#095028",
              900: "#052814",
            },
            warning: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#f5a524",
              50: "#fefce8",
              100: "#fdedd3",
              200: "#fbdba7",
              300: "#f9c97c",
              400: "#f7b750",
              500: "#f5a524",
              600: "#c4841d",
              700: "#936316",
              800: "#62420e",
              900: "#312107",
            },
            danger: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#f31260",
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#f871a0",
              400: "#f54180",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#610726",
              900: "#310413",
            },
          },
        },
        dark: {
          // ...
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            divider: "rgba(255, 255, 255, 0.15)",
            focus: "#006FEE",
            content: {
              1: "#18181b",
              2: "#27272a",
              3: "#3f3f46",
              4: "#52525b",
            },
            default: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
            },
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
              50: "#001731",
              100: "#002e62",
              200: "#004493",
              300: "#005bc4",
              400: "#006FEE",
              500: "#338ef7",
              600: "#66aaf9",
              700: "#99c7fb",
              800: "#cce3fd",
              900: "#e6f1fe",
            },
            secondary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#9353d3",
              50: "#180828",
              100: "#301050",
              200: "#6020a0",
              300: "#6020a0",
              400: "#7828c8",
              500: "#9353d3",
              600: "#ae7ede",
              700: "#c9a9e9",
              800: "#e4d4f4",
              900: "#f2eafa",
            },
            success: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#17c964",
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#17c964",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
            },
            warning: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#f5a524",
              50: "#312107",
              100: "#62420e",
              200: "#936316",
              300: "#c4841d",
              400: "#f5a524",
              500: "#f7b750",
              600: "#f9c97c",
              700: "#fbdba7",
              800: "#fdedd3",
              900: "#fefce8",
            },
            danger: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#f31260",
              50: "#310413",
              100: "#610726",
              200: "#920b3a",
              300: "#c20e4d",
              400: "#f31260",
              500: "#f54180",
              600: "#f871a0",
              700: "#faa0bf",
              800: "#fdd0df",
              900: "#fee7ef",
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
};
