const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

module.exports = {
	// from: "src/input/css/style.css",
	map: process.env.ELEVENTY_ENV !== "production",
	// only variables that are used are in the build output (tree shaking)
	plugins: [
		postcssImport(),
		...(process.env.ELEVENTY_ENV === "production"
			? [cssnano({ preset: "default" })]
			: []),
	],
};
