// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 100,
	useTabs: true,
	tabWidth: 4,
	arrowParens: "avoid",
	trailingComma: "all",
	overrides: [
		{
			files: "*.md",
			options: {
				useTabs: false,
			},
		},
		{
			files: ["tsconfig.json", "tsconfig.*.json"],
			options: {
				parser: "json",
				trailingComma: "none",
			},
		},
	],
};
