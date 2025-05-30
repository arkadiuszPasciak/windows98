import { DSText } from "@windows98/design-system"
import styles from "./description.module.scss"
import { useDescription } from "./use-description"

export const Description = () => {
	const { translations } = useDescription()

	return (
		<div className={styles.description}>
			<img
				width="32"
				height="32"
				src="/icons/applications/run.png"
				alt=""
				data-test-id="mf-runner-description-icon"
			/>
			<DSText
				id="mf-runner-description-text"
				text={translations.description}
			/>
		</div>
	)
}
