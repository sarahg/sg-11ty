const faviconPlugin = require("eleventy-favicon");
const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function (eleventyConfig) {
  // Pass static assets to /public.
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./_headers");

  // Rebuild on file change.
  eleventyConfig.addWatchTarget("./src/css/");

  // Plugins.
  eleventyConfig.addPlugin(faviconPlugin);
  eleventyConfig.addPlugin(eleventyGoogleFonts);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
