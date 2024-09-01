const pluginPostCss = require("eleventy-plugin-postcss");
const jsx = require("eleventy-plugin-static-jsx");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(jsx);
	eleventyConfig.addPlugin(pluginPostCss);
	eleventyConfig.addPlugin(require("./rollup.cjs"));
};
