/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,njk,md}", ".eleventy.js"],
	theme: {
		colors: {
			primary: {
				light: "rgb(var(--color-primary-light) / <alpha-value>)",
				DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
				dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
			},
			accent: {
				1: "rgb(var(--color-accent-1) / <alpha-value>)",
				2: "rgb(var(--color-accent-2) / <alpha-value>)",
			},
			neutral: {
				100: "hsl(var(--color-neutral-1) / <alpha-value>)",
				200: "hsl(var(--color-neutral-2) / <alpha-value>)",
				300: "hsl(var(--color-neutral-3) / <alpha-value>)",
				400: "hsl(var(--color-neutral-4) / <alpha-value>)",
				500: "hsl(var(--color-neutral-5) / <alpha-value>)",
			},
			white: "hsl(var(--color-white) / <alpha-value>)",
		},
		fontFamily: {
			header: "var(--font-header)",
			body: "var(--font-body)",
			emphasis: "var(--font-emphasis)",
		},
		extend: {
			maxWidth: {
				"70ch": "70ch",
			},
		},
	},
	plugins: [],
};
