import selectButtonSVG from '../../icons/svg/select-button.svg'
import type { DSIconProps } from './ds-icon.type'

const icons = {
	selectButton: selectButtonSVG
}

export function DSIcon({ name }: DSIconProps) {
  return (
	<>
		{icons[name]}
	</>	
  )
}
