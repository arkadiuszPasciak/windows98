import type { PropsWithChildren } from "react"

export interface ConfigProps extends PropsWithChildren {
	onCloseProgram: () => void
}
