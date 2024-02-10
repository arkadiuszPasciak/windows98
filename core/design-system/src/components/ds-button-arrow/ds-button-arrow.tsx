import type { DSButtonArrowProps } from './ds-button-arrow.type';
import styles from './ds-button-arrow.module.scss'

export function DSButtonArrow({
	ariaLabel,
	direction,
	disabled,
	onClick,
	size
}: DSButtonArrowProps) {
	return (
		<button
			aria-label={ariaLabel}
			className={`
				${styles['ds-button-arrow']}
				${styles[`arrow-${direction}`]}
				${styles[`size-${size}`]}
			`}
			disabled={disabled}
			type="button"
			onClick={onClick}
		/>
	)
	
}