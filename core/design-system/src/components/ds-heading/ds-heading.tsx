import type { FunctionComponent } from "react"
import styles from "./ds-heading.module.scss"
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
			className={`${styles["ds-heading"]} ${className}`}
			data-testid={`${id}-heading`}
		>
			{text}
		</Heading>
	)
}
