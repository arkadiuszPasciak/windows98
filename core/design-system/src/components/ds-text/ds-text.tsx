import { textStyleWrapper } from "./ds-text.style"
import type { DSTextProps } from "./ds-text.type"

export function DSText({ styles, id, text }: DSTextProps) {
	return (
		<p
			className={textStyleWrapper(styles)}
			data-testid={`${id}-text`}
		>
			{text}
		</p>
	)
}
