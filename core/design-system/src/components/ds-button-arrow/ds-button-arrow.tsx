import type { DSButtonArrowProps } from './ds-button-arrow.type';
import styles from './ds-button-arrow.module.scss'

export function DSButtonArrow({
	ariaLabel,
	direction,
	disabled,
	id,
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
			data-testid={`ds-button-arrow-${id}`}
			disabled={disabled}
			type="button"
			onClick={onClick}
		/>
	)
	
}