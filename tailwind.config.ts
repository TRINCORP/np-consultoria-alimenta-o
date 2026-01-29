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
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "floating": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
          },
          "25%": { 
            transform: "translateY(-20px) rotate(1deg)",
          },
          "50%": { 
            transform: "translateY(-35px) rotate(0deg)",
          },
          "75%": { 
            transform: "translateY(-20px) rotate(-1deg)",
          },
        },
        "marquee": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "silver-shine": {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "100%": {
            backgroundPosition: "200% center",
          },
        },
        "reflection-sweep": {
          "0%": { transform: "translateX(-100%) skewX(12deg)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(300%) skewX(12deg)", opacity: "0" },
        },
        "shimmer-wave": {
          "0%": { transform: "translateX(-150%) skewX(-12deg)", opacity: "0" },
          "40%": { opacity: "0.8" },
          "100%": { transform: "translateX(250%) skewX(-12deg)", opacity: "0" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "energy-pulse": {
          "0%, 100%": { 
            transform: "scale(1)", 
            opacity: "0.8",
          },
          "50%": { 
            transform: "scale(1.05)", 
            opacity: "1",
          },
        },
        "magnetic-float": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": { 
            transform: "translateY(-8px) rotate(1deg)",
          },
          "66%": { 
            transform: "translateY(-4px) rotate(-1deg)",
          },
        },
        "rotate-rectangle": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-fast": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glitch-1": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "glitch-2": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(2px, -2px)" },
          "40%": { transform: "translate(2px, 2px)" },
          "60%": { transform: "translate(-2px, -2px)" },
          "80%": { transform: "translate(-2px, 2px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "floating": "floating 8s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
        "silver-shine": "silver-shine 2.5s linear infinite",
        "bounce-subtle": "bounce 2s infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "energy-pulse": "energy-pulse 2s ease-in-out infinite",
        "magnetic-float": "magnetic-float 4s ease-in-out infinite",
        "ping": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "reflection-sweep": "reflection-sweep 4s ease-out infinite",
        "shimmer-wave": "shimmer-wave 3.5s ease-out infinite",
        "sparkle": "sparkle 2s ease-in-out infinite",
        "rotate-rectangle": "rotate-rectangle 20s linear infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        "rotate-fast": "rotate-fast 10s linear infinite",
        "gradient-x": "gradient-shift 3s ease infinite",
        "shimmer-text": "silver-shine 3s linear infinite",
        "glitch-1": "glitch-1 0.3s ease infinite",
        "glitch-2": "glitch-2 0.3s ease infinite",
        "bounce-subtle": "bounceSubtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
