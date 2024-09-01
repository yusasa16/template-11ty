const path = require("path");
const { rollup } = require("rollup");

module.exports = (eleventyConfig) => {
	const rollupOptions = require(path.resolve(
		process.cwd(),
		"rollup.config.js"
	));

	const extensionConfig = {
		outputFileExtension: "js",
		read: false,
		compile: async (_, inputPath) => {
			const parsed = path.parse(inputPath);
			if (parsed.name.startsWith("_")) return;

			const relativePath = path.parse(
				path.relative(eleventyConfig.dir.input, inputPath)
			);
			const outputPath = path.join(
				eleventyConfig.dir.output,
				relativePath.dir,
				`${relativePath.name}.js`
			);

			const bundle = await rollup({
				input: inputPath,
			});

			await bundle.write({
				...rollupOptions.output,
				file: outputPath,
			});
		},
	};

	eleventyConfig.addTemplateFormats("js");
	eleventyConfig.addExtension("js", extensionConfig);
};
