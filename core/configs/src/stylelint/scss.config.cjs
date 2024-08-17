module.exports = {
	extends: ["./css.config.cjs"],
	overrides: [
		{
			files: ["*.scss", "**/*.scss"],
			customSyntax: "postcss-scss",
			extends: ["stylelint-config-recommended-scss"],
			rules: {
				"scss/operator-no-newline-after": null,
			},
		},
	],
}
