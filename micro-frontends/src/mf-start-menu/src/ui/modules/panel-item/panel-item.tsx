import type { FunctionComponent } from "react"
import { PanelItemContent } from "./content/content"
import type { PanelItemProps } from "./panel-item.type"
import { usePanelItemGroup } from "./use-panel-item-group.hook"
import { usePanelItemProgram } from "./use-panel-item-program.hook"
import { usePanelItem } from "./use-panel-item.hook"
import { PanelItemWrapper } from "./wrapper"

export const PanelItem: FunctionComponent<PanelItemProps> = ({
	variant,
	id,
	type,
	programs,
}) => {
	if (!type) return null

	const { translations } = usePanelItem({ id })
	const Content: FunctionComponent = () => (
		<PanelItemContent
			id={id}
			name={translations.name}
			variant={variant}
		/>
	)

	if (type === "program") {
		const { openProgram } = usePanelItemProgram({ id })

		return (
			<PanelItemWrapper
				id={id}
				variant={variant}
			>
				{type === "program" && (
					<button
						type="button"
						onClick={openProgram}
						data-testid={`mf-start-menu-panel-item-${id}-open-program`}
					>
						<Content />
					</button>
				)}
			</PanelItemWrapper>
		)
	}

	if (type === "group" && programs) {
		const { isGroupHovered, handleMouseEnter, handleMouseLeave } =
			usePanelItemGroup()

		return (
			<PanelItemWrapper
				id={id}
				variant={variant}
			>
				<div
					data-testid={`mf-start-menu-panel-item-${id}-open-group`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<Content />
					{isGroupHovered && <>{programs}</>}
				</div>
			</PanelItemWrapper>
		)
	}

	return null
}
