export enum ETimerTime {
	HOURS = "hours",
	MINUTES = "minutes",
	SECONDS = "seconds",
}

export enum ETimerStatus {
	PLAY = "play",
	STOP = "stop",
	RESET = "reset",
}

export interface ITimerTime extends Record<ETimerTime, number> {}
