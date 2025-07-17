import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import styles from "./ds-heading.module.css"
import type { DSHeadingProps } from "./ds-heading.type"

export const DSHeading: FunctionComponent<DSHeadingProps> = ({
	className = "",
	id,
	text,
	type,
}) => {
	const Heading = type

	return (
		<Heading
			className={getClassNames([styles["ds-heading"], className])}
			data-testid={`${id}-heading`}
		>
			{text}
		</Heading>
	)
}
