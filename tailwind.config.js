module.exports = {
  // important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    animationDelay: {
      none: "0ms",
      150: "150ms",
      300: "300ms",
      450: "450ms",
      600: "600ms",
      750: "750ms",
      900: "900ms",
      1050: "1050ms",
      1200: "1200ms",
    },
    extend: {
      colors: {
        "tkd1": "var(--tkd1)",
        "tkd2": "var(--tkd2)",
        "activecolor": "var(--active-color)",
        "textcolor": "var(--text-color)",
        "backgroundcolor": "var(--background-color)",
      },
      transitionTimingFunction: {
        'tkdanimation1': 'cubic-bezier(0.935, 0, 0.34, 1.33)',
      }
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
  variants: {
    animationDelay: ["responsive", "hover"],
  },
};
