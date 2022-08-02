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

	eleventyConfig.addCollection("sections", function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/sections/*.md");
	});

	eleventyConfig.addCollection("activities", function (collectionApi) {
		return collectionApi
			.getFilteredByGlob("./src/activities/*.md")
			.sort((a, b) => b.data.order - a.data.order);
	});

	eleventyConfig.addCollection("sliderImages", function (collectionApi) {
		return collectionApi
			.getFilteredByGlob("./src/slider-images/*.md")
			.sort((a, b) => b.data.order - a.data.order);
	})

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",

		dir: {
			input: "src",
		},
	};
};
