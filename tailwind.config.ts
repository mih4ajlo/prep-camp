/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // tailwind.config.js

  theme: {
    screens: {
      sm: {
        min: "320px",
        max: "767px",
      },
      md: {
        min: "768px",
        max: "1023px",
      },
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
      "2k": "2500px",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        primary1: {
          DEFAULT: "#1C1C1E", // Rich charcoal, for headers/text
          light: "#2E2E30",
          dark: "#0E0E0F",
        },
        accent1: {
          DEFAULT: "#D9A441", // Gold hue (echoes prestige + Go board)
          light: "#F2C97F",
          dark: "#B07C2C",
        },
        background1: {
          DEFAULT: "#FAF8F5", // Off-white, clean background
          light: "#FFFFFF",
          dark: "#F0EEE9",
        },
        stone: {
          black: "#2A2A2A", // Go stone black
          white: "#EDEDED", // Go stone white
        },
        highlight: {
          DEFAULT: "#5C9D8B", // Muted jade/teal for call-to-action
          light: "#88C5B1",
          dark: "#397968",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
