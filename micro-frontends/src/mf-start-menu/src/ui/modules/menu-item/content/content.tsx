import { DSText } from "@windows98/design-system"
import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import type { MenuItemVariant } from "../menu-item.type"
import styles from "./content.module.css"
import type { GetIconURL, MenuItemContentProps } from "./content.type"

const getIconURL: GetIconURL = (id) => {
	switch (id) {
		case "programs":
		case "accessories":
		case "entertainment":
		case "games":
			return "/icons/programs/folder.png"
		default:
			return `/icons/programs/${id}.png`
	}
}

const imageSizes: Record<MenuItemVariant, number> = {
	primary: 25,
	secondary: 18,
}

export const MenuItemContent: FunctionComponent<MenuItemContentProps> = ({
	id,
	name,
	variant,
}) => (
	<div className={getClassNames([styles.content])}>
		<img
			width={imageSizes[variant]}
			height={imageSizes[variant]}
			src={getIconURL(id)}
			alt=""
		/>
		<DSText
			id={`mf-start-menu-menu-item-${id}`}
			text={name}
		/>
	</div>
)
