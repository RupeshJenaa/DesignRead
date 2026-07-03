/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#1A1A1A",
        border: "#262626",
        "text-primary": "#F2F2F2",
        "text-secondary": "#8C8C8C",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "24px",
        "6": "32px",
        "7": "48px",
        "8": "80px",
        "9": "96px",
      },
      borderRadius: {
        card: "20px",
        "card-inner": "16px",
        pill: "9999px",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
      },
    },
  },
  plugins: [],
};
