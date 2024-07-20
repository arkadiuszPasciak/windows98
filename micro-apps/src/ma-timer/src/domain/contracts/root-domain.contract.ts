import type { TimerControllerDomainContract } from "./controller-domain.contract"
import type { TimerDomainContract } from "./domain.contract"
import type { TimerPlayerDomainContract } from "./player.contract"
import type { TimerPresetsDomainContract } from "./presets-domain.contract"

export interface TimerDomainRootContract {
	timerDomain: TimerDomainContract
	timerControllerDomain: TimerControllerDomainContract
	timerPlayerDomain: TimerPlayerDomainContract
	timerPresetsDomain: TimerPresetsDomainContract
}
