import type { FunctionComponent } from "react"
import { PulpitItem } from "../pulpit-item"
import styles from "./pulpit.module.css"
import type { PulpitProps } from "./pulpit.types"

export const Pulpit: FunctionComponent<PulpitProps> = ({ items }) => {
	return (
		<div
			className={styles.pulpit}
			data-testid="mf-pulpit-pulpit"
		>
			{items.map((item) => (
				<PulpitItem
					key={item.name}
					name={item.name}
				/>
			))}
		</div>
	)
}
