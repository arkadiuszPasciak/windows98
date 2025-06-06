import { DSText } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import styles from "./content.module.scss"
import type { PanelItemContentProps } from "./content.type"

const getIconURL = (id: string): string => `/icons/programs/${id}.png`

export const PanelItemContent: FunctionComponent<PanelItemContentProps> = ({
	id,
	name,
	variant,
}) => (
	<div className={styles.content}>
		<img
			width={variant === "primary" ? 25 : 18}
			height={variant === "primary" ? 25 : 18}
			src={getIconURL(id)}
			alt=""
		/>
		<DSText
			id={`mf-start-panel-item-${id}`}
			text={name}
		/>
	</div>
)
