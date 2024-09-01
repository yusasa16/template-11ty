const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
	output: {
		sourcemap: process.env.ELEVENTY_ENV !== "production",
		plugins: [terser()],
	},
};
