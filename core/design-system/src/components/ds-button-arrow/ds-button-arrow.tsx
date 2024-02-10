import type { DSButtonArrowProps } from './ds-button-arrow.type';

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
			className={`ds-button-arrow ${direction} ${size}`}
			disabled={disabled}
			type="button"
			onClick={onClick}
		/>
	)
	
}