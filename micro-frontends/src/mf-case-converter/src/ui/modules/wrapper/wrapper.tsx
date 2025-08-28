import { Cases } from "../cases"
import { InputText } from "../input-text"
import { Modal } from "../modal"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<InputText />
				<Cases />
			</div>
		</Modal>
	)
}
