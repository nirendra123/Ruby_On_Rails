Module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helper/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      dosis: ["Dosis", "sans-serif"],
      pacifico: ["Pacifico", "sans-serif"],
    },
    colors: {
      primary: {
        500: "#337ab7",
      },
    },
  },
};
