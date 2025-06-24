import { Controller } from "../controller"
import { Description } from "../description"
import { Modal } from "../modal"
import { Presets } from "../presets"
import styles from "./wrapper.module.scss"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<Description />
				<Presets />
				<Controller />
			</div>
		</Modal>
	)
}
