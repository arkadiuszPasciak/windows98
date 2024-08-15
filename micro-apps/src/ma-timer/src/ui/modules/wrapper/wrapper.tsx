import type { FunctionComponent } from "react"
import { useSyncLang } from "../../../../../ma-calendar/src/ui/hooks/use-sync-lang.hook"
import { Controller } from "../controller"
import { Player } from "../player"
import { Presets } from "../presets"
import { Screen } from "../screen"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	// It's temporary solution, will be removed in the future
	useSyncLang()

	return (
		<div
			className={styles.wrapper}
			data-testid="ma-timer-wrapper"
		>
			<Presets />
			<Controller />
			<Screen />
			<Player />
		</div>
	)
}
