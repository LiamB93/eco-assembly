module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        six: {
          DEFAULT: "#2F4858",
        },
        five: {
          DEFAULT: "#046074",
        },
        four: {
          DEFAULT: "#007983",
        },
        three: {
          DEFAULT: "#009283",
        },
        two: {
          DEFAULT: "#00AA73",
        },
        one: {
          DEFAULT: "#57BE56",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
