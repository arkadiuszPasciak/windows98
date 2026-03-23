import { DSButton, DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./color-input.module.css"
import { useColorInput } from "./use-color-input.hook"

export const ColorInput: FunctionComponent = observer(() => {
	const { colorObjects, translations } = useColorInput()

	return (
		<div className={styles["color-wrapper"]}>
			{colorObjects.map((colorObject) => (
				<div
					key={`color-${colorObject.id}`}
					className={styles["color-item"]}
				>
					<DSInput
						id={`mf-color-generator-${colorObject.id}`}
						labelName={colorObject.labelName}
						initialValue={colorObject.value}
						readonly={true}
						wrapperLayout="vertical"
					/>
					<DSButton
						id={`mf-color-generator-copy-${colorObject.id}`}
						text={translations.copy}
						onClick={colorObject.copyColor}
					/>
				</div>
			))}
		</div>
	)
})
