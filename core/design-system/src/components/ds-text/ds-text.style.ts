import { type Styles, css } from "../../../@bundler/src/styled-system/css"

export const textStyleWrapper = (styles: Styles | Styles[]) =>
	css(
		{
			color: "text",
			fontSize: "xs",
			lineHeight: "tight",
			fontWeight: "regular",
			fontFamily: "sansSerifMedium",
		},
		styles,
	)
