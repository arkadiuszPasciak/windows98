import { ButtonGenerate } from "../button-generate"
import { InputText } from "../input-text"
import { Modal } from "../modal"
import { Presets } from "../presets"
import { QRCodePreview } from "../qr-code-preview"
import { SelectFormat } from "../select-format"
import { SelectSize } from "../select-size"
import styles from "./wrapper.module.css"

export const Wrapper = () => {
	return (
		<Modal>
			<div className={styles.wrapper}>
				<InputText />
				<Presets />
				<SelectSize />
				<SelectFormat />
				<ButtonGenerate />
				<QRCodePreview />
			</div>
		</Modal>
	)
}
