import { Modal } from "../modal"
import { Snapshot } from "../snapshot"
import { Video } from "../video"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<Video />
				<Snapshot />
			</div>
		</Modal>
	)
}
