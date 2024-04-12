/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-orange": "radial-gradient(circle, #878787 0%, #F56E0F 100%)",
      },
      colors: {
        "dark-void": "#151419",
        "liquid-lava": "#F56E0F",
        "dusty-gray": "#878787",
        "slate-gray": "#262626",
        "gluon-gray": "#1b1b1e",
        "snow-white": "#fbfbfb",
      },
      fontFamily: {
        dots: ["var(--font-dots)"],
        oswald: ["var(--font-oswald)"],
        lora: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};
