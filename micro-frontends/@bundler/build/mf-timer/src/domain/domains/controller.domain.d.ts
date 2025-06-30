import { TimerControllerDomainContract, TimerDomainContract } from '../contracts';
export declare class TimerControllerDomain implements TimerControllerDomainContract {
    private timerDomain;
    constructor(timerDomain: TimerDomainContract);
    increaseSeconds: () => void;
    decreaseSeconds: () => void;
    increaseMinutes: () => void;
    decreaseMinutes: () => void;
    increaseHours: () => void;
    decreaseHours: () => void;
}
