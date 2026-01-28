import { DownloadSound } from "../download-sound"
import { Information } from "../information"
import { Modal } from "../modal"
import { ResetRecording } from "../reset-recording"
import { StartRecording } from "../start-recording"
import { StopRecording } from "../stop-recording"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<Information />
				<StartRecording />
				<StopRecording />
				<DownloadSound />
				<ResetRecording />
			</div>
		</Modal>
	)
}
