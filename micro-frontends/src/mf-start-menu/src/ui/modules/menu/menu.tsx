import type { FunctionComponent } from "react"
import type { PanelItems } from "../../../domain/models"
import { ButtonStart } from "../button-start"
import { Panel } from "../panel"
import {
	PanelItemGroup,
	PanelItemProgram,
	PanelItemType,
	PanelItemVariant,
} from "../panel-item"
import { useMenu } from "./use-menu.hook"

const UnderMenu: FunctionComponent<{ items: PanelItems }> = ({ items }) => {
	return (
		<Panel variant="secondary">
			{items.map((item) =>
				item.type === "group" && item.programs ? (
					<PanelItemGroup
						key={`mf-start-menu-panel-item-${item.id}`}
						id={item.id}
						type={PanelItemType.GROUP}
						variant={PanelItemVariant.SECONDARY}
						programs={<UnderMenu items={item.programs as PanelItems} />}
					/>
				) : (
					<PanelItemProgram
						key={`mf-start-menu-panel-item-${item.id}`}
						id={item.id}
						type={PanelItemType.PROGRAM}
						variant={PanelItemVariant.SECONDARY}
					/>
				),
			)}
		</Panel>
	)
}

export const Menu: FunctionComponent = () => {
	const { items, isOpenMenu, toggleMenu } = useMenu()

	if (!items) return null

	return (
		<>
			<ButtonStart onClick={toggleMenu} />

			{isOpenMenu && (
				<Panel variant="primary">
					{items.map((item) =>
						item.type === "group" ? (
							<PanelItemGroup
								key={`mf-start-menu-panel-item-${item.id}`}
								id={item.id}
								type={PanelItemType.GROUP}
								variant={PanelItemVariant.PRIMARY}
								programs={<UnderMenu items={item.programs as PanelItems} />}
							/>
						) : (
							<PanelItemProgram
								key={`mf-start-menu-panel-item-${item.id}`}
								id={item.id}
								type={PanelItemType.PROGRAM}
								variant={PanelItemVariant.PRIMARY}
							/>
						),
					)}
				</Panel>
			)}
		</>
	)
}
