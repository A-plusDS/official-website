import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: "#091A14",
          deep: "#06130E",
        },
        alabaster: "#FAF9F5",
        cream: "#F3F1EA",
        slate: {
          dark: "#7C8A84",
          light: "#5C6A64",
        },
        muted: {
          dark: "#B7C5BF",
          card: "#C4D0CB",
        },
        border: {
          light: "#E4E1D7",
          dark: "#1A3328",
        },
        success: {
          surface: "#E2EAE5",
        },
        // Client brand palettes
        tlp: {
          burgundy: "#5C1E2B",
          paper: "#FAF7F2",
          gold: "#B08D57",
        },
        vd: {
          navy: "#0B1F3A",
          cobalt: "#122F57",
          blue: "#2563EB",
          silver: "#9EB1C9",
        },
        evently: {
          noir: "#0A0A0A",
          gold: "#C5A26F",
          ivory: "#F5F0E6",
          sand: "#BFB6A4",
        },
        griggs: {
          teal: "#007A78",
          amber: "#F59D2B",
          ice: "#DBEFF0",
          navy: "#0D1A28",
        },
        breed: {
          espresso: "#221B17",
          roast: "#120E0C",
          gold: "#D4B483",
        },
        tbr: {
          ink: "#0B1623",
          crimson: "#B91C1C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "sans-serif"],
        serif: ["var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "'Cormorant Garamond'", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      maxWidth: {
        container: "1100px",
      },
      borderRadius: {
        pill: "100px",
        sheet: "24px",
        feature: "20px",
      },
    },
  },
  plugins: [],
};

export default config;

