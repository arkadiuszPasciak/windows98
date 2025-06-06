import type { FunctionComponent } from "react"
import { PanelItemContent } from "../content"
import styles from "../panel-item.module.scss"
import { PanelItemWrapper } from "../wrapper"
import type { PanelItemGroupProps } from "./group.type"
import { usePanelItemGroup } from "./use-group.hook"

export const PanelItemGroup: FunctionComponent<PanelItemGroupProps> = ({
	id,
	type,
	variant,
	programs,
}) => {
	const { isGroupHovered, handleMouseEnter, handleMouseLeave, translations } =
		usePanelItemGroup({ id })

	return (
		<div
			className={styles["panel-item"]}
			data-testid={`mf-start-menu-panel-item-${id}-open-group`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<PanelItemWrapper
				id={id}
				type={type}
			>
				<PanelItemContent
					id={id}
					name={translations.name}
					variant={variant}
				/>
				{isGroupHovered && <>{programs}</>}
			</PanelItemWrapper>
		</div>
	)
}
