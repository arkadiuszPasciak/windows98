export interface ModalNavigationItem {
	name: string
	onClick?: () => void
}

export interface ModalNavigationProps {
	navigation: ModalNavigationItem[]
}
