export type DSIconIcons = {
	[key in DSIconNames]: JSX.Element;
}

export type DSIconNames = 'selectButton'

export interface DSIconProps {
	name: DSIconNames
}
