export type DSIconIcons = {
  [key in DSIconNames]: JSX.Element
}

export type DSIconNames = 'select-button'

export interface DSIconProps {
  className?: string
  name: DSIconNames
}
