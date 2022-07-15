const { DateTime } = require("luxon");
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

	// Custom collections
	eleventyConfig.addCollection("posts", (collection) => {
		return [...collection.getFilteredByGlob("./src/posts/**/*.md")];
	});

	eleventyConfig.addCollection("tagList", (collection) => {
		const tagsSet = new Set();
		collection.getAll().forEach((item) => {
			if (!item.data.tags) return;
			item.data.tags
				.filter((tag) => !["all", "nav", "posts", "rss"].includes(tag))
				.forEach((tag) => tagsSet.add(tag));
		});
		return Array.from(tagsSet).sort();
	});

	// Custom filters
	eleventyConfig.addFilter("limit", function (arr, limit) {
		return arr.slice(0, limit);
	});

	// Set Luxon date time formatting
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj)
			.setZone("America/Los_Angeles")
			.toLocaleString(DateTime.DATE_FULL);
	});

	eleventyConfig.addFilter("postDateShort", (dateObj) => {
		return DateTime.fromJSDate(dateObj)
			.setZone("America/Los_Angeles")
			.toLocaleString(DateTime.DATE_SHORT);
	});

	// Image shortcode
	eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
	eleventyConfig.addLiquidShortcode("image", imageShortcode);
	eleventyConfig.addJavaScriptFunction("image", imageShortcode);

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",

		dir: {
			input: "src",
		},
	};
};
