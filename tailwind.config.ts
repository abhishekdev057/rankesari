import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem"
      },
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0908",
          900: "#0a0908",
          800: "#121110",
          700: "#1a1916",
          600: "#26241f"
        },
        gold: {
          50: "#fbf6e7",
          100: "#f3e7b8",
          200: "#e8d27d",
          300: "#d9b54d",
          400: "#c69a2e",
          500: "#a87f1f",
          600: "#8a6618",
          DEFAULT: "#c8a25b"
        },
        sand: {
          50: "#f8f1e3",
          100: "#efe2c5",
          200: "#e1cea0",
          300: "#cdb37a",
          400: "#b69558",
          DEFAULT: "#d9c4a0"
        },
        ivory: "#f5efe2"
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        widest2: "0.32em"
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent 0%, #c8a25b 50%, transparent 100%)",
        "gold-shine":
          "linear-gradient(135deg, #8a6618 0%, #d9b54d 35%, #f3e7b8 50%, #d9b54d 65%, #8a6618 100%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>\")"
      },
      boxShadow: {
        gold: "0 10px 40px -20px rgba(200,162,91,0.6)",
        soft: "0 30px 80px -40px rgba(0,0,0,0.8)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 1s ease forwards",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 40s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
