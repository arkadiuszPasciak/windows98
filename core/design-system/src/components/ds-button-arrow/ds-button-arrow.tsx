import styles from "./ds-button-arrow.module.scss"
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
			className={`
				${styles["ds-button-arrow"]}
				${styles[`arrow-${direction}`]}
				${styles[`size-${size}`]}
				${className}
			`}
			data-testid={`ds-button-arrow-${id}-${direction}`}
			disabled={disabled}
			type="button"
			onClick={onClick}
		/>
	)
}
