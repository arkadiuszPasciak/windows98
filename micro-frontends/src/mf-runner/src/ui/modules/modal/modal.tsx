import { DSModal } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { Controller } from "../controller"
import { Description } from "../description"
import { Input } from "../input"
import styles from "./modal.module.scss"
import { useModal } from "./use-modal.hook"

export const Modal: FunctionComponent = () => {
	const { translations, onCloseProgram } = useModal()

	return (
		<DSModal
			id="mf-runner"
			moveWindow={true}
			onClose={onCloseProgram}
			title={translations.title}
			width="330px"
			height="165px"
		>
			<div className={styles.wrapper}>
				<Description />
				<Input />
				<Controller />
			</div>
		</DSModal>
	)
}
