import { DSRadio } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { usePresets } from './use-presets.hook'
import styles from "./presets.module.scss"

export const Presets: FunctionComponent = () => {
	const {
		presets,
	} = usePresets()

	return (
		<div
			className={styles.presets}
			data-testid="ma-timer-presets"
		>
			{presets.map((preset) => (
				<DSRadio
					key={preset.id}
					id={preset.id}
					initialValue={preset.initialValue}
					name="ma-timer-presets"
					state={preset.state}
					text={{
						content: preset.content,
						visible: true,
					}}
					onChange={() => preset.onChange}
				/>
			))}
		</div>
	)
}
