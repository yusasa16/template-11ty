const pluginPostCss = require("eleventy-plugin-postcss");
const jsx = require("eleventy-plugin-static-jsx");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(jsx);
	eleventyConfig.addPlugin(pluginPostCss);

	return {
		dir: {
			input: "src/input",
			layouts: "../_layouts",
			includes: "../_components",
			output: "_dist",
		},
	};
};
