/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#08070a",
        surface: "#12111a",
        surface2: "#1a1825",
        border: "rgba(255,255,255,0.08)",
        borderHover: "rgba(255,255,255,0.15)",
        violet: "#7F77DD",
        indigo: "#534AB7",
        cyan: "#22D3EE",
        magenta: "#D4537E",
        textPrimary: "#F5F5F7",
        textSecondary: "#8E8BA3",
        textTertiary: "#65656E",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "violet-cyan": "linear-gradient(90deg, #9B93EA, #22D3EE)",
        "violet-indigo": "linear-gradient(135deg, #7F77DD, #534AB7)",
      },
    },
  },
  plugins: [],
};
