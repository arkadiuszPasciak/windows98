import type { DSDefaultProps } from "../../types"

export type DSHeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface DSHeadingProps extends DSDefaultProps {
	type: DSHeadingType
	text: string
	id: string
}
