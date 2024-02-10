import { DSIcon } from '../..';
import type { DSButtonArrowProps } from './ds-button-arrow.type';

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