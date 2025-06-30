import type { FunctionComponent } from "react"
import { PulpitItem } from "../pulpit-item"
import styles from "./pulpit.module.scss"
import type { PulpitProps } from "./pulpit.types"

export const Pulpit: FunctionComponent<PulpitProps> = ({ items }) => {
	return (
		<div
			className={styles.pulpit}
			data-testid="mf-pulpit-pulpit"
		>
			{items.map((item, index) => (
				<PulpitItem
					key={`pulpit-item-${index}-${item.name}`}
					name={item.name}
				/>
			))}
		</div>
	)
}
