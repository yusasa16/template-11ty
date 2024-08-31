const jsx = require("eleventy-plugin-static-jsx");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(jsx);

	return {
		dir: {
			input: "src/input",
			layouts: "../_layouts",
			includes: "../_components",
			output: "_dist",
		},
	};
};
