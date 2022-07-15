const htmlMinTransform = require("./src/transforms/html-min-transform.js");

// Eleventy module exports
module.exports = function (eleventyConfig) {
	if (process.env.ELEVENTY_PRODUCTION) {
		eleventyConfig.addTransform("htmlmin", htmlMinTransform);
	}

	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addPassthroughCopy("./src/admin");

	// Watch targets
	eleventyConfig.addWatchTarget("./src/styles/site.css");
	eleventyConfig.addWatchTarget("./tailwind.config.js");

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",

		dir: {
			input: "src",
		},
	};
};
