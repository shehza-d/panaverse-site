/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bk: "#09121d",
      wt: "#F5F5F5",
      gray: {
        100: "#f7fafc",
        900: "#1a202c",
      },
    },
    extend: {},
  },
  plugins: [],
};
