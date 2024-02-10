import { DSIcon } from '../..';

interface DSButtonArrowProps {
	ariaLabel: string
	direction: 'top' | 'bottom'
	disabled: boolean
	size: 'small' | 'medium'
}

export function DSButtonArrow({
	ariaLabel,
	direction,
	disabled,
	size
}: DSButtonArrowProps) {
	<button
		aria-label={ariaLabel}
		className={`ds-button-arrow ${direction} ${size}`}
		disabled={disabled}
		type="button"
	>
		<DSIcon
			name="select-button"
		/>
	</button>
}