import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        headline: ["Manrope", "Noto Serif", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        border: "#564337",
        input: "#564337",
        ring: "#ffb68b",
        background: "#131313",
        foreground: "#e5e2e1",
        primary: {
          DEFAULT: "#ffb68b",
          foreground: "#522300",
          container: "#e87722",
        },
        secondary: {
          DEFAULT: "#e6c364",
          foreground: "#3d2f00",
          container: "#785d00",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "#1c1b1b",
          foreground: "#a58c7e",
        },
        accent: {
          DEFAULT: "#e87722",
          foreground: "#e5e2e1",
        },
        popover: {
          DEFAULT: "#0e0e0e",
          foreground: "#e5e2e1",
        },
        card: {
          DEFAULT: "#201f1f",
          foreground: "#e5e2e1",
        },
        surface: {
          DEFAULT: "#131313",
          low: "#1c1b1b",
          container: "#201f1f",
          high: "#2a2a2a",
          highest: "#353534",
          lowest: "#0e0e0e",
        },
        gold: "#C9A84C",
        "gold-dim": "#785d00",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#ddc1b2",
        "on-primary": "#522300",
        "on-background": "#e5e2e1",
        outline: "#a58c7e",
        "outline-variant": "#564337",
        sidebar: {
          DEFAULT: "#131313",
          foreground: "#e5e2e1",
          primary: "#e87722",
          "primary-foreground": "#522300",
          accent: "#201f1f",
          "accent-foreground": "#e5e2e1",
          border: "#1c1b1b",
          ring: "#ffb68b",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "calc(1rem - 2px)",
        sm: "calc(1rem - 4px)",
        xl: "2rem",
        "2xl": "3rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
