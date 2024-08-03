import { DSRadio } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { usePresets } from './use-presets.hook'
import styles from "./presets.module.scss"
import { observer } from "mobx-react-lite"

export const Presets: FunctionComponent = observer(() => {
	const {
		disabled,
		presets,
	} = usePresets()

	return (
		<div
			className={styles.presets}
			data-testid="ma-timer-presets"
		>
			{presets.map((preset) => (
				<DSRadio
					initialChecked={preset.initialChecked}
					disabled={disabled}
					id={preset.id}
					key={preset.id}
					name="ma-timer-presets"
					onChange={preset.setPreset}
					text={{
						content: preset.content,
						visible: true,
					}}
				/>
			))}
		</div>
	)
})
