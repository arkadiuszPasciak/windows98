module.exports = {
	"../../../app/**/*.{js,ts,vue}": [
		"pnpm --filter @windows98/eslint-config run lintfix:js",
	],
	"../../../app/**/*.{scss,vue}": [
		"pnpm --filter @windows98/stylelint run lintfix:styles",
	],
}
