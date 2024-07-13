export enum ETimerTime {
	HOURS = "hours",
	MINUTES = "minutes",
	SECONDS = "seconds",
}

export enum ETimerStatus {
	PLAY = "play",
	PAUSE = "pause",
	RESTART = "restart"
}

export interface ITimerTime extends Record<ETimerTime, number> { }
