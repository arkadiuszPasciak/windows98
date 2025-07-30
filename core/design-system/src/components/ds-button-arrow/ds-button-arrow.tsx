import { getClassNames } from "@windows98/toolkit"
import styles from "./ds-button-arrow.module.css"
import type { DSButtonArrowProps } from "./ds-button-arrow.type"

export function DSButtonArrow({
	ariaLabel,
	className = "",
	direction,
	disabled,
	id,
	onClick,
	size,
}: DSButtonArrowProps) {
	return (
		<button
			aria-label={ariaLabel}
			className={getClassNames([styles["ds-button-arrow"], className])}
			data-arrow={direction}
			data-size={size}
			data-testid={`${id}-button-arrow-${direction}`}
			disabled={disabled}
			type="button"
			onClick={onClick}
		/>
	)
}
