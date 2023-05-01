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
        EPIQBlue: "#aaccff",
        EPIQPink: "#feb6ca",
        EPIQGreen: "#86d9ca",
        EPIQYellow: "#ddc894",
        EPIQPurple: "#8577ff",
        EPIQBlack: "#222233",
        EPIQGrey: "#6c6b8d",
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        poppins: ["Poppins"],
      },
      height: {
        "78vh": "78vh",
      },
      minHeight: {
        "78vh": "78vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
