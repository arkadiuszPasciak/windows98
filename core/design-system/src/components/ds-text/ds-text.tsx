import { getClassNames } from "@windows98/toolkit"
import styles from "./ds-text.module.css"
import type { DSTextProps } from "./ds-text.type"

export function DSText({ className = "", id, text }: DSTextProps) {
	return (
		<p
			className={getClassNames([styles.text, className])}
			data-testid={`${id}-text`}
		>
			{text}
		</p>
	)
}
