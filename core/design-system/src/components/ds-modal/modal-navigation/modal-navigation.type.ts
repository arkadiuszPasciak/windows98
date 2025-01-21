export interface ModalNavigationItem {
	name: string
	onClick?: () => void
}

export interface ModalNavigationProps {
	id: string
	navigation: ModalNavigationItem[]
}
