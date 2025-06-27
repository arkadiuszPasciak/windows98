import { TimerDomainContract, TimerPlayerDomainContract } from '../contracts';
export declare class TimerPlayerDomain implements TimerPlayerDomainContract {
    private timerDomain;
    private interval;
    constructor(timerDomain: TimerDomainContract);
    start: () => void;
    stop: () => void;
    reset: () => void;
    private clearTimerInterval;
    private restartTime;
}
