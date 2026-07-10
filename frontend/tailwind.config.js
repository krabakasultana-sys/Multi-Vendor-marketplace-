/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D6EFD",
          light: "#3D8BFD",
          dark: "#0353c4",
        },
        accent: {
          DEFAULT: "#FA8232",
          dark: "#e0701f",
        },
      },
    },
  },
  plugins: [],
};
