import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { CancelButton } from "../cancel-button"
import { FileName } from "../file-name"
import { FileType } from "../file-type"
import { SaveButton } from "../save-button"
import styles from "./modal.module.scss"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent = () => {
	const { closeModal, translations } = useModal()

	return (
		<DSModal
			id="ma-notepad-save"
			moveWindow={false}
			onClose={closeModal}
			title={translations.modalTitle}
			width="320px"
			height="100px"
		>
			<div className={styles.wrapper}>
				<FileName />
				<SaveButton />
				<FileType />
				<CancelButton />
			</div>
		</DSModal>
	)
}
