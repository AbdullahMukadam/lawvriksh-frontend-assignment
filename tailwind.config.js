module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-colors100": "var(--neutral-colors100)",
        "neutral-colors300": "var(--neutral-colors300)",
        "neutral-colors400": "var(--neutral-colors400)",
        "neutral-colors500": "var(--neutral-colors500)",
        "neutral-colors600": "var(--neutral-colors600)",
        "neutral-colors700": "var(--neutral-colors700)",
        "neutral-colors800": "var(--neutral-colors800)",
        "othergreen-50": "var(--othergreen-50)",
        "primary-colorscolor-1": "var(--primary-colorscolor-1)",
        "secondary-colorscolor-1": "var(--secondary-colorscolor-1)",
        "secondary-colorscolor-2": "var(--secondary-colorscolor-2)",
        "secondary-colorscolor-3": "var(--secondary-colorscolor-3)",
        "secondary-colorscolor-4": "var(--secondary-colorscolor-4)",
        "system-colorsgreen-300": "var(--system-colorsgreen-300)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "paragraph-small": "var(--paragraph-small-font-family)",
        "special-headings-display-4":
          "var(--special-headings-display-4-font-family)",
        "text-single-100-bold": "var(--text-single-100-bold-font-family)",
        "text-single-100-medium": "var(--text-single-100-medium-font-family)",
        "text-single-200-medium": "var(--text-single-200-medium-font-family)",
        "text-single-300-medium": "var(--text-single-300-medium-font-family)",
        "text-single-400-bold": "var(--text-single-400-bold-font-family)",
        "text-single-50-medium": "var(--text-single-50-medium-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "general-shadow-01": "var(--general-shadow-01)",
        "general-shadow-03": "var(--general-shadow-03)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
