/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        poison: "#b76ea5",
        flying: "#99a6fb",
        dragon: "#8b7ced",
        bug: "#b6c348",
        dark: "#2d3748",
        water: "#0e9fbc",
        fire: "#ee6173",
        normal: "#a98963",
        electric: "#ffcc00",
        psychic: "#ef3e78",
        ice: "#9cdfe6",
        steel: "#5a6679",
        fairy: "#fffec5",
        grass: "#65ab43",
        ground: "#bfac40",
        fighting: "#eb4d4b",
        rock: "#ba8f4f",
        ghost: "#646464",
      },
    },
  },
  plugins: [],
};
