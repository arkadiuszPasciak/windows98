import { TimerDomain } from "./timer.domain"
import { TimerControllerDomain } from "./controller.domain"
import { TimerPlayerDomain } from "./player.domain"
import { TimerPresetsDomain } from "./presets.domain"
import type { TimerDomainRootContract } from "../contracts/root-domain.contract"

export class TimerDomainRoot implements TimerDomainRootContract {
	public timerDomain
	public timerControllerDomain
	public timerPlayerDomain
	public timerPresetsDomain

	constructor() {
		this.timerDomain = new TimerDomain()
		this.timerControllerDomain = new TimerControllerDomain(this.timerDomain)
		this.timerPlayerDomain = new TimerPlayerDomain(this.timerDomain)
		this.timerPresetsDomain = new TimerPresetsDomain(this.timerDomain)
	}
}
