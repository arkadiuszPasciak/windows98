import { DSRadio, DSText } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./choose-dimension.module.css"
import { useChooseDimension } from "./use-choose-dimension.hook"

export const ChooseDimension: FunctionComponent = observer(() => {
	const { boardTypes, setBoardType, selectedBoardType, translations } =
		useChooseDimension()

	return (
		<>
			<DSText
				id="mf-tic-tac-toe-starter-choose-dimension"
				text={translations.label}
			/>
			<div className={styles["radio-wrapper"]}>
				{boardTypes.map((type) => (
					<DSRadio
						initialChecked={type.content === selectedBoardType}
						id={type.id}
						key={type.id}
						name="mf-tic-tac-toe-starter-choose-dimension"
						onChange={() => setBoardType(type.content)}
						text={{
							content: type.name,
							visible: true,
						}}
					/>
				))}
			</div>
		</>
	)
})
