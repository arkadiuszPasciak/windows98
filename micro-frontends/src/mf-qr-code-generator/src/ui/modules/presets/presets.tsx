import { DSRadio, DSText } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./presets.module.css"
import { usePresets } from "./use-presets.hook"

export const Presets: FunctionComponent = observer(() => {
	const { presets, presetValue, setPresetValue, translations } = usePresets()

	return (
		<>
			<DSText
				text={translations.label}
				id="mf-qr-code-generator-presets"
			/>
			<div className={styles.presets}>
				{presets.map((preset) => (
					<DSRadio
						initialChecked={preset.id === presetValue}
						id={`mf-qr-code-generator-presets-${preset.id}`}
						key={`mf-qr-code-generator-presets-${preset.id}`}
						name="mf-qr-code-generator-presets"
						onChange={() => setPresetValue(preset.id)}
						text={{
							content: preset.content,
							visible: true,
						}}
					/>
				))}
			</div>
		</>
	)
})
