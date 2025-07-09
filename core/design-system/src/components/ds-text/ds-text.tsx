import styles from "./ds-text.module.css"
import type { DSTextProps } from "./ds-text.type"

export function DSText({ className = "", id, text }: DSTextProps) {
	return (
		<p
			className={`${styles.text} ${className}`}
			data-testid={`ds-text-${id}`}
		>
			{text}
		</p>
	)
}
