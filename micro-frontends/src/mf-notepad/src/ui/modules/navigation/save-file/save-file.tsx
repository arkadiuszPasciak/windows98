import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { SaveFileView as MFSaveFile } from "../../../../../../mf-save-file/src/ui/views"
import styles from "../navigation.module.css"
import { useSaveFile } from "./use-save-file.hook"

export const SaveFile: FunctionComponent = observer(() => {
	const { closeModal, openModal, fileTypes, modalState, text, translations } =
		useSaveFile()

	return (
		<>
			<button
				data-testid="mf-notepad-save-file-button"
				className={styles.button}
				type="button"
				onClick={openModal}
			>
				{translations.button}
			</button>
			{modalState && (
				<MFSaveFile
					contentFile={text}
					fileTypes={fileTypes}
					onCloseModal={closeModal}
				/>
			)}
		</>
	)
})
