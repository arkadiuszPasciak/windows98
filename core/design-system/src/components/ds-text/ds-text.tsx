import type { DSTextProps } from "./ds-text.type"
import { style } from "./ds-text.style"

export function DSText({
	className = "",
	id,
	text
}: DSTextProps) {
	return (
		<p
			className={`${style.text} ${className}`}
			data-testid={`ds-text-${id}`}
		>
			{text}
		</p>
	)
}
