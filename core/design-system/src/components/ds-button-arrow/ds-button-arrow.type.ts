import { MouseEvent } from 'react';

export interface DSButtonArrowProps {
	ariaLabel: string
	direction: 'top' | 'bottom'
	disabled: boolean
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	size: 'small' | 'medium'
}
