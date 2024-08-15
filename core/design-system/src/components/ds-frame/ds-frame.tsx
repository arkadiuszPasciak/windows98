import { DSText } from "../../index"
import styles from "./ds-frame.module.scss"
import type { DSFrameProps } from "./ds-frame.type"

export function DSFrame({ children, className = "", id, title }: DSFrameProps) {
	return (
		<div
			className={`${styles.frame} ${className}`}
			data-testid={`ds-frame-${id}`}
		>
			{title && (
				<DSText
					className={styles.title}
					text={title}
					id={`frame-${id}`}
				/>
			)}
			{children}
		</div>
	)
}
