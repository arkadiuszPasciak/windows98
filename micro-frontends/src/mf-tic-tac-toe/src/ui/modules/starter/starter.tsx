import type { FunctionComponent } from "react"
import { ChooseDimension } from "./choose-dimension"
import { ChooseSign } from "./choose-sign"
import { EnterYourName } from "./enter-your-name"
import { StartGame } from "./start-game"
import styles from "./starter.module.css"
import type { StarterProps } from "./starter.type"

export const Starter: FunctionComponent<StarterProps> = ({ onStartGame }) => {
	return (
		<div
			className={styles["starter-wrapper"]}
			data-testid="mf-tic-tac-toe-starter"
		>
			<EnterYourName />
			<ChooseSign />
			<ChooseDimension />
			<StartGame onClick={onStartGame} />
		</div>
	)
}
