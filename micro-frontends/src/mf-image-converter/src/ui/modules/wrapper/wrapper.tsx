import { ConvertImage } from "../convert-image"
import { DownloadImage } from "../download-image"
import { ImageFormat } from "../image-format"
import { Information } from "../information"
import { Modal } from "../modal"
import { OpenImage } from "../open-image"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<Information />
				<OpenImage />
				<ImageFormat />
				<ConvertImage />
				<DownloadImage />
			</div>
		</Modal>
	)
}
