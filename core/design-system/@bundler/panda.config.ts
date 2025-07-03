import { defineConfig } from "@pandacss/dev"

export default defineConfig({
	conditions: {
		light: "[theme=light] &",
		dark: "[theme=dark] &",
	},
	theme: {
		extend: {
			containerSizes: {
				sm: "320px",
				md: "768px",
				lg: "1024px",
			},
			tokens: {
				fontSizes: {
					xs: { value: "10px" },
					sm: { value: "15px" },
					md: { value: "20px" },
					lg: { value: "25px" },
					xl: { value: "40px" },
				},
				lineHeights: {
					normal: { value: "1" },
					tight: { value: "1.2" },
					relaxed: { value: "1.5" },
					loose: { value: "2" },
				},
				fontWeights: {
					regular: { value: "400" },
					bold: { value: "800" },
				},
				letterSpacings: {
					xs: { value: "1px" },
					sm: { value: "2px" },
					md: { value: "5px" },
				},
				spacing: {
					auto: { value: "auto" },
					0: { value: "0px" },
					"2xs": { value: "1px" },
					xs: { value: "2px" },
					ms: { value: "5px" },
					md: { value: "10px" },
					lg: { value: "12px" },
					xl: { value: "15px" },
					"2xl": { value: "20px" },
					"3xl": { value: "25px" },
				},
				colors: {
					black100: { value: "#000000" },
					black200: { value: "#0a0a0a" },
					black300: { value: "#222222" },
					blue100: { value: "#0000ff" },
					blue200: { value: "#000080" },
					blue300: { value: "#1084d0" },
					blue400: { value: "#007b7b" },
					blue500: { value: "#0f0f81" },
					blue600: { value: "#330099" },
					grey100: { value: "#3b3b3b" },
					grey200: { value: "#808080" },
					grey300: { value: "#8b8b8b" },
					grey400: { value: "#969696" },
					grey500: { value: "#9b9b9b" },
					grey600: { value: "#a9a9a9" },
					grey700: { value: "#b5b5b5" },
					grey800: { value: "#c0c0c0" },
					grey900: { value: "#dfdfdf" },
					red100: { value: "#fe0000" },
					white100: { value: "#ffffff" },
				},
				fonts: {
					sansSerifBold: { value: "'MSSansSerifBold', sans-serif" },
					sansSerifMedium: { value: "'MSSansSerifMedium', sans-serif" },
				},
				borders: {
					fieldInner: {
						value: "inset -1px -1px #ffffff, inset 1px 1px #808080",
					},
					fieldOuter: {
						value: "inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a",
					},
					raisedInner: {
						value: "inset -2px -2px #808080, inset 2px 2px #dfdfdf",
					},
					raisedOuter: {
						value: "inset -1px -1px #0a0a0a, inset 1px 1px #ffffff",
					},
					sunkenInner: {
						value: "inset -2px -2px #dfdfdf, inset 2px 2px #808080",
					},
					sunkenOuter: {
						value: "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a",
					},
					rangeInner: {
						value:
							"1px 0 0 #ffffff, 1px 1px 0 #ffffff, 0 1px 0 #ffffff, -1px 0 0 #c0c0c0",
					},
					rangeOuter: {
						value:
							"-1px -1px 0 #c0c0c0, 0 -1px 0 #c0c0c0, -1px 1px 0 #ffffff, 1px -1px #c0c0c0",
					},
					fieldOuterDark: {
						value: "inset -2px -2px #8b8b8b, inset 2px 2px #000000",
					},
					fieldInnerDark: {
						value: "inset -1px -1px #8b8b8b, inset 1px 1px #000000",
					},
					raisedOuterDark: {
						value: "inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b",
					},
					raisedInnerDark: {
						value: "inset -2px -2px #000000, inset 2px 2px #808080",
					},
					sunkenOuterDark: {
						value: "inset -1px -1px #9b9b9b, inset 1px 1px #000000",
					},
					sunkenInnerDark: {
						value: "inset -2px -2px #9b9b9b, inset 2px 2px #000000",
					},
				},
			},
			semanticTokens: {
				colors: {
					background: {
						value: {
							_light: "{colors.grey800}",
							_dark: "{colors.grey100}",
						},
					},
					backgroundWhite: {
						value: {
							_dark: "{colors.grey100}",
							_light: "{colors.grey100}", // fallback to dark value
						},
					},
					backgroundModalHeader: {
						value: {
							_light:
								"linear-gradient(90deg, {colors.blue200}, {colors.blue300})",
							_dark:
								"linear-gradient(90deg, {colors.blue600}, {colors.blue500})",
						},
					},
					backgroundPulpit: {
						value: {
							_light: "{colors.blue400}",
							_dark: "{colors.black100}",
						},
					},
					borderPrimary: {
						value: {
							_light: "{colors.grey300}",
							_dark: "{colors.grey300}", // fallback to light value
						},
					},
					borderSecondary: {
						value: {
							_light: "{colors.grey400}",
							_dark: "{colors.grey400}", // fallback to light value
						},
					},
					text: {
						value: {
							_light: "{colors.black300}",
							_dark: "{colors.grey500}",
						},
					},
					borderNavigation: {
						value: {
							_light: "{colors.white100}",
							_dark: "{colors.grey300}",
						},
					},
				},
				borders: {
					field: {
						value: {
							_light:
								"inset -1px -1px {colors.grey300}, inset 1px 1px {colors.black100}, inset -2px -2px {colors.grey300}, inset 2px 2px {colors.black100}",
							_dark: "{borders.fieldInnerDark}, {borders.fieldOuterDark}",
						},
					},
					raised: {
						value: {
							_light:
								"inset -1px -1px {colors.black200}, inset 1px 1px {colors.grey500}, inset -2px -2px {colors.black100}, inset 2px 2px {colors.grey200}",
							_dark:
								"inset -1px -1px {colors.black200}, inset 1px 1px {colors.grey500}, inset -2px -2px {colors.black100}, inset 2px 2px {colors.grey200}", // fallback to light value
						},
					},
					sunken: {
						value: {
							_light:
								"inset -1px -1px {colors.grey500}, inset 1px 1px {colors.black100}, inset -2px -2px {colors.grey500}, inset 2px 2px {colors.black100}",
							_dark:
								"inset -1px -1px {colors.grey500}, inset 1px 1px {colors.black100}, inset -2px -2px {colors.grey500}, inset 2px 2px {colors.black100}", // fallback to light value
						},
					},
				},
				shadows: {
					raised: {
						value: {
							_light: "{borders.raisedOuterDark}, {borders.raisedInnerDark}",
							_dark: "{borders.raisedOuterDark}, {borders.raisedInnerDark}",
						},
					},
					sunken: {
						value: {
							_light: "{borders.sunkenOuterDark}, {borders.sunkenInnerDark}",
							_dark: "{borders.sunkenOuterDark}, {borders.sunkenInnerDark}",
						},
					},
				},
			},
		},
	},
	globalCss: {
		"html, body": {
			appearance: "none",
			margin: 0,
			overflowX: "hidden",
			padding: 0,
			width: "100%",
		},
	},
	globalFontface: {
		MSSansSerifBold: {
			src: 'url(/fonts/MSSansSerifBold.woff2) format("woff2")',
			fontWeight: 800,
			fontStyle: "normal",
			fontDisplay: "swap",
		},
		MSSansSerifMedium: {
			src: 'url(/fonts/MSSansSerifMedium.woff2) format("woff2")',
			fontWeight: 400,
			fontStyle: "normal",
			fontDisplay: "swap",
		},
	},
	include: ["src/components/**/*.style.ts"],
	minify: true,
	outdir: "@bundler/src/styled-system",
	preflight: true,
	presets: [],
	shorthands: false,
	strictPropertyValues: true,
	strictTokens: true,
	syntax: "object-literal",
})
