import type { FunctionComponent } from "react"
import { PulpitItem } from "../pulpit-item"
import styles from "./pulpit.module.scss"
import type { PulpitProps } from "./pulpit.types"
import { usePulpit } from "./use-pulpit.hook"

export const Pulpit: FunctionComponent<PulpitProps> = ({ items }) => {
	const { t } = usePulpit()

	return (
		<div
			className={styles.pulpit}
			data-testid="ma-pulpit-pulpit"
		>
			{items.map((item, index) => (
				<PulpitItem
					key={`pulpit-item-${index}-${item.icon}`}
					name={t(item.name)}
					icon={item.icon}
				/>
			))}
		</div>
	)
}
