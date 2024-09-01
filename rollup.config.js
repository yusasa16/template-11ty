const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
	input: {
		plugins: [typescript()],
	},
	output: {
		sourcemap: process.env.ELEVENTY_ENV !== "production",
		plugins: [terser()],
	},
};
