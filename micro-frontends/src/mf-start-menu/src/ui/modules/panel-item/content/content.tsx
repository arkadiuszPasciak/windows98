import { DSText } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import type { PanelItemVariant } from "../panel-item.type"
import type { PanelItemContentProps } from "./content.type"

const iconSizes: Record<PanelItemVariant, number> = {
	secondary: 25,
	primary: 18,
}

const getIconURL = (id: string): string => `/icons/programs/${id}.png`

export const PanelItemContent: FunctionComponent<PanelItemContentProps> = ({
	id,
	name,
	variant,
}) => (
	<div style={{ display: "flex", alignItems: "center" }}>
		<img
			width={iconSizes[variant]}
			height={iconSizes[variant]}
			src={getIconURL(id)}
			alt=""
		/>
		<DSText
			id={`mf-start-panel-item-${id}`}
			text={name}
		/>
	</div>
)
