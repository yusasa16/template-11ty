module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(require("./src/_11ty/plugins/index.cjs"));

	return {
		dir: {
			input: "./src/input",
			layouts: "../_layouts",
			includes: "../_components",
			output: "./_dist",
		},
	};
};
