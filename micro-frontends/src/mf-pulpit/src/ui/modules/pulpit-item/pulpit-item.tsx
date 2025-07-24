import type { FunctionComponent } from "react"
import styles from "./pulpit-item.module.css"
import type { PulpitItemProps } from "./pulpit-item.types"
import { usePulpitItem } from "./use-pulpit.hook"

export const PulpitItem: FunctionComponent<PulpitItemProps> = ({ name }) => {
	const { translatedName } = usePulpitItem({ name })

	return (
		<div className={styles.item}>
			<img
				className={styles.icon}
				width="32"
				height="32"
				src={`/icons/programs/${name}.png`}
				alt={translatedName}
			/>
			<span className={styles.name}>{translatedName}</span>
		</div>
	)
}
