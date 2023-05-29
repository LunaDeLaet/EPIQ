/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        blue: "#aaccff",
        pink: "#feb6ca",
        green: "#86d9ca",
        yellow: "#ddc894",
        purple: "#8577ff",
        black: "#222233",
        grey: "#6c6b8d",
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        poppins: ["Poppins"],
      },
      height: {
        "50vh": "50vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
