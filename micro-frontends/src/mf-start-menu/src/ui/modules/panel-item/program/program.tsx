import type { FunctionComponent } from "react"
import { PanelItemContent } from "../content"
import { PanelItemWrapper } from "../wrapper"
import type { PanelItemProgramProps } from "./program.type"
import { usePanelItemProgram } from "./use-program.hook"

export const PanelItemProgram: FunctionComponent<PanelItemProgramProps> = ({
	id,
	type,
	variant,
}) => {
	const { openProgram, translations } = usePanelItemProgram({ id })

	return (
		<button
			type="button"
			onClick={openProgram}
			data-testid={`mf-start-menu-panel-item-${id}-open-program`}
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
			</PanelItemWrapper>
		</button>
	)
}
