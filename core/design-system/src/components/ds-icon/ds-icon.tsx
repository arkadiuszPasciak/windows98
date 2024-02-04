import { DSIconSelectButton } from './icons/ds-icon-select-button'
import type { DSIconIcons, DSIconProps } from './ds-icon.type'

const icons: DSIconIcons = {
	selectButton: DSIconSelectButton
}

export function DSIcon({ name }: DSIconProps) {
  return (
	<>
		{icons[name]}
	</>	
  )
}
