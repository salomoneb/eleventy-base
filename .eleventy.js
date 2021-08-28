const htmlMinTransform = require("./src/transforms/html-min-transform");

module.exports = function (config) {
  // Sass
  config.addWatchTarget("./src/scss");

  if (process.env.ELEVENTY_ENV === "production") {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  return {
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
