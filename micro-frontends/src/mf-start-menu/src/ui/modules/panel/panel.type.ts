import type { PropsWithChildren } from "react"

type PanelVariants = "primary" | "secondary"

export interface PanelProps extends PropsWithChildren {
	variant: PanelVariants
}
