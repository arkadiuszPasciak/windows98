import { DSRadio, DSText } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./choose-sign.module.css"
import { useChooseSign } from "./use-choose-sign.hook"

export const ChooseSign: FunctionComponent = observer(() => {
	const { playerSigns, setPlayerSign, selectedPlayerSign, translations } =
		useChooseSign()

	return (
		<>
			<DSText
				id="mf-tic-tac-toe-starter-choose-sign"
				text={translations.label}
			/>
			<div className={styles["radio-wrapper"]}>
				{playerSigns.map((sign) => (
					<DSRadio
						initialChecked={sign.content === selectedPlayerSign}
						id={sign.id}
						key={sign.id}
						name="mf-tic-tac-toe-starter-choose-sign"
						onChange={() => setPlayerSign(sign.content)}
						text={{
							content: sign.content,
							visible: true,
						}}
					/>
				))}
			</div>
		</>
	)
})
