import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundClip: {
        text: "text",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      keyframes: {
        cinematicPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.02)" },
        },
        fadeIn: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(10px)" // Reduced movement
          },
          "20%": { 
            opacity: "0.2" // Gradual fade start
          },
          "80%": { 
            opacity: "0.9" // Stretch the fade
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
      },
      animation: {
        cinematicPulse: "cinematicPulse 8s infinite ease-in-out",
        "fade-in": "fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards", // Smoother easing
      },
      animationDelay: {
        200: "0.2s",
        400: "0.4s",
        600: "0.6s",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          "animation-delay": (value: string) => ({
            "animation-delay": value,
          }),
        },
        {
          values: theme("animationDelay"),
        }
      );
    },
  ],
};

export default config;