import { DSFrame, DSRadio } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./presets.module.scss"
import { usePresets } from "./use-presets.hook"

export const Presets: FunctionComponent = observer(() => {
	const { disabled, presets, selectedPreset, setPreset, title } = usePresets()

	return (
		<DSFrame
			className={styles.presets}
			data-testid="ma-timer-presets"
			id="ma-timer-presets"
			title={title}
		>
			{presets.map((preset) => (
				<DSRadio
					initialChecked={preset.preset === selectedPreset}
					disabled={disabled}
					id={preset.id}
					key={preset.id}
					name="ma-timer-presets"
					onChange={() => setPreset(preset.preset)}
					text={{
						content: preset.content,
						visible: true,
					}}
				/>
			))}
		</DSFrame>
	)
})
