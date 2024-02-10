import { MouseEvent } from 'react';

export interface DSButtonArrowProps {
	ariaLabel: string
	direction: 'top' | 'bottom'
	disabled: boolean
	id: string | number
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	size: 'small' | 'medium'
}
