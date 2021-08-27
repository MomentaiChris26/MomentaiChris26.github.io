module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class' or false
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      homePage: "#19346B",
      aboutPage: "#3066D1",
      projectPage: "#2753AB",
    }),
    extend: {
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {},
    },
  ],
};
