import { DSIconSelectButton } from './icons/ds-icon-select-button'
import type { DSIconIcons, DSIconProps } from './ds-icon.type'
import { DSIconRadioSVG } from './icons/ds-icon-radio.svg'

const icons: DSIconIcons = {
  'select-button': <DSIconSelectButton />,
  "radio": <DSIconRadioSVG />
}

export function DSIcon({
  className = '',
  name
}: DSIconProps) {
  return (
    <span className={className}>{icons[name]}</span>
  )
}
