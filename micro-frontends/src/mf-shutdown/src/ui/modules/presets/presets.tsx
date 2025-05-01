import { DSRadio } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./presets.module.scss"
import { usePresets } from "./use-presets.hook"

export const Presets: FunctionComponent = observer(() => {
	const { presets, selectedPreset, setPreset } = usePresets()

	return (
		<div className={styles.presets}>
			{presets.map((preset) => (
				<DSRadio
					initialChecked={preset.preset === selectedPreset}
					id={preset.id}
					key={preset.id}
					name="mf-timer-presets"
					onChange={() => setPreset(preset.preset)}
					text={{
						content: preset.content,
						visible: true,
					}}
				/>
			))}
		</div>
	)
})
