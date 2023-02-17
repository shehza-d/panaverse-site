/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bk: "#09121d",
        wt: "#F5F5F5",
        accent: "#11AD8E",
        gray: {
          100: "#f7fafc",
          900: "#1a202c",
        },
      },
      fontFamily: {
        out: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
