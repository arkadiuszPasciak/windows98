import { DSIconSelectButton } from './icons/ds-icon-select-button'
import type { DSIconIcons, DSIconProps } from './ds-icon.type'

const icons: DSIconIcons = {
  'select-button': <DSIconSelectButton />,
}

export function DSIcon({ className, name }: DSIconProps) {
  return <span className={className ?? undefined}>{icons[name]}</span>
}
