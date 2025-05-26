import type { FunctionComponent } from "react"
import styles from "./information.module.scss"
import { useInformation } from "./use-information.hook"

export const Information: FunctionComponent = () => {
	const { browserName, deviceType, operatingSystem, translations } =
		useInformation()

	return (
		<div
			className={styles.information}
			data-testid="mf-system-information-information"
		>
			<span className={styles.title}>{translations.deviceType}:</span>
			<span
				className={styles.text}
				data-testid="mf-system-information-device-type"
			>
				{deviceType}
			</span>
			<span className={styles.title}>{translations.browserName}:</span>
			<span
				className={styles.text}
				data-testid="mf-system-information-browser-name"
			>
				{browserName}
			</span>
			<span className={styles.title}>{translations.operatingSystem}:</span>
			<span
				className={styles.text}
				data-testid="mf-system-information-operating-system"
			>
				{operatingSystem}
			</span>
		</div>
	)
}
