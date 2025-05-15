import type { PropsWithChildren } from "react"

export interface ConfigProps extends PropsWithChildren {
	contentFile: string
	fileTypes: Array<string>
	onCloseModal: () => void
}
