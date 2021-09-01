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
    textColor: (theme) => ({
      ...theme("colors"),
      navText: "#B6C0D7",
      orangeBtnText: "#EB664D",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      jordyBlue: "#7EA3EE",
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
