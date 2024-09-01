import { Controller } from "../controller"
import { Description } from "../description"
import { Presets } from "../presets"
import styles from "./wrapper.module.scss"

export const Wrapper = () => {
	return (
		<div className={styles.wrapper}>
			<Description />
			<Presets />
			<Controller />
		</div>
	)
}
