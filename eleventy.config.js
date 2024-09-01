const pluginPostCss = require("eleventy-plugin-postcss");
const path = require("path");
const jsx = require("eleventy-plugin-static-jsx");
const { rollup } = require("rollup");
const terser = require("@rollup/plugin-terser");

module.exports = function (eleventyConfig) {
	const input = "./src/input";
	const output = "./_dist";

	eleventyConfig.addPlugin(jsx);
	eleventyConfig.addPlugin(pluginPostCss);

	eleventyConfig.addTemplateFormats("js");
	eleventyConfig.addExtension("js", {
		outputFileExtension: "js",
		read: false,
		compile: async (_, inputPath) => {
			const parsed = path.parse(inputPath);
			if (parsed.name.startsWith("_")) return;

			const bundle = await rollup({ input: inputPath });
			const bundled = await bundle.write({
				file: path.join(output, path.relative(input, inputPath)),
				sourcemap: process.env.ELEVENTY_ENV !== "production",
				plugins: [terser()],
			});
			return bundled.output.code;
		},
	});

	return {
		dir: {
			input,
			layouts: "../_layouts",
			includes: "../_components",
			output,
		},
	};
};
