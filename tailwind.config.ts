import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fustat: ["Fustat", "sans-serif"],
        onest: ["Onest", "sans-serif"],
        geist: ["Geist", "sans-serif"],
      },
      screens: {
        xs: "400px",
      },
      colors: {
        secundario: {
          "50": "#EFFDF3",
          "100": "#DDFBE5",
          "200": "#B8F6C9",
          "300": "#94F1AD",
          "400": "#70ED92",
          "500": "#4CE876",
          "600": "#1DDF51",
          "700": "#16AE3F",
          "800": "#107C2D",
          "900": "#0A4A1B",
          "950": "#063112",
          DEFAULT: "#4CE876",
        },
        primario: {
          "50": "#FFFEE7",
          "100": "#FEFDD3",
          "200": "#FEFBAB",
          "300": "#FDF982",
          "400": "#FDF75A",
          "500": "#FCF532",
          "600": "#F2EA04",
          "700": "#BBB503",
          "800": "#847F02",
          "900": "#4C4A01",
          "950": "#312F01",
          DEFAULT: "#FCF532",
        },
        negro: {
          "cod-gray": {
            "50": "#686868",
            "100": "#5E5E5E",
            "200": "#494949",
            "300": "#353535",
            "400": "#202020",
            "500": "#0C0C0C",
            "600": "#000000",
            "700": "#000000",
            "800": "#000000",
            "900": "#000000",
            "950": "#000000",
            DEFAULT: "#0C0C0C",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
