import { getClassNames } from "@windows98/toolkit"
import styles from "./ds-label.module.css"
import type { DSLabelProps } from "./ds-label.type"

export function DSLabel({ className = "", id, text }: DSLabelProps) {
	return (
		<label
			className={getClassNames([styles.label, className])}
			data-testid={`${id}-label`}
			htmlFor={id}
		>
			{text}
		</label>
	)
}
