import { getClassNames } from "@windows98/toolkit"
import { DSText } from "../../index"
import styles from "./ds-frame.module.css"
import type { DSFrameProps } from "./ds-frame.type"

export function DSFrame({ children, className = "", id, title }: DSFrameProps) {
	const idName = `${id}-frame`

	return (
		<div
			className={getClassNames([styles.frame, className])}
			data-testid={idName}
		>
			{title && (
				<DSText
					className={getClassNames([styles.title])}
					text={title}
					id={idName}
				/>
			)}
			{children}
		</div>
	)
}
