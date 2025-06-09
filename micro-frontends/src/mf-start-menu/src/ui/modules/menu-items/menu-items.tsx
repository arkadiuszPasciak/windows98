import type { FunctionComponent } from "react"
import { MenuItemType } from "../../../domain/models"
import { MenuItemGroup, MenuItemProgram, MenuItemVariant } from "../menu-item"
import type { MenuItemsProps } from "./menu-items.type"
import { MenuItemsWrapper, MenuItemsWrapperVariant } from "./wrapper"

export const MenuItems: FunctionComponent<MenuItemsProps> = ({ items }) => {
	return (
		<MenuItemsWrapper variant={MenuItemsWrapperVariant.PRIMARY}>
			{items.map((item) =>
				item.type === "group" && item.programs ? (
					<MenuItemGroup
						key={`mf-start-menu-menu-item-${item.id}`}
						id={item.id}
						type={MenuItemType.GROUP}
						variant={MenuItemVariant.PRIMARY}
					>
						<MenuItemsWrapper variant={MenuItemsWrapperVariant.SECONDARY}>
							{item.programs.map((itemProgram) =>
								itemProgram.type === "group" && itemProgram.programs ? (
									<MenuItemGroup
										key={`mf-start-menu-menu-item-${itemProgram.id}`}
										id={itemProgram.id}
										type={MenuItemType.GROUP}
										variant={MenuItemVariant.SECONDARY}
									>
										<MenuItemsWrapper
											variant={MenuItemsWrapperVariant.SECONDARY}
										>
											{itemProgram.programs.map((subItemProgram) => (
												<MenuItemProgram
													key={`mf-start-menu-menu-item-${subItemProgram.id}`}
													id={subItemProgram.id}
													type={MenuItemType.PROGRAM}
													variant={MenuItemVariant.SECONDARY}
												/>
											))}
										</MenuItemsWrapper>
									</MenuItemGroup>
								) : (
									<MenuItemProgram
										key={`mf-start-menu-menu-item-${itemProgram.id}`}
										id={itemProgram.id}
										type={MenuItemType.PROGRAM}
										variant={MenuItemVariant.SECONDARY}
									/>
								),
							)}
						</MenuItemsWrapper>
					</MenuItemGroup>
				) : (
					<MenuItemProgram
						key={`mf-start-menu-menu-item-${item.id}`}
						id={item.id}
						type={MenuItemType.PROGRAM}
						variant={MenuItemVariant.PRIMARY}
					/>
				),
			)}
		</MenuItemsWrapper>
	)
}
