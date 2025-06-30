export declare enum ETimerTime {
    HOURS = "hours",
    MINUTES = "minutes",
    SECONDS = "seconds"
}
export declare enum ETimerStatus {
    PLAY = "play",
    STOP = "stop",
    RESET = "reset"
}
export interface ITimerTime extends Record<ETimerTime, number> {
}
