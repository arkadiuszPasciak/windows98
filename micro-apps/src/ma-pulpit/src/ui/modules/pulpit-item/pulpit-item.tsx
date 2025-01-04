import type { FunctionComponent } from "react"
import styles from "./pulpit-item.module.scss"
import type { PulpitItemProps } from "./pulpit-item.types"

export const PulpitItem: FunctionComponent<PulpitItemProps> = ({
	name,
	icon,
}) => {
	return (
		<div className={styles.item}>
			<img
				className={styles.icon}
				width="32"
				height="32"
				src={`/icons/applications/${icon}.png`}
				alt={name}
			/>
			<span className={styles.name}>{name}</span>
		</div>
	)
}
