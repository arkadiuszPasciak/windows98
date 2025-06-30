import { TimerControllerDomainContract, TimerDomainContract, TimerPlayerDomainContract, TimerPresetsDomainContract } from '../contracts';
import { ETimerStatus, ETimerTime, ITimerTime } from '../models';
export declare class TimerDomain implements TimerDomainContract {
    controllerDomain: TimerControllerDomainContract;
    playerDomain: TimerPlayerDomainContract;
    presetsDomain: TimerPresetsDomainContract;
    time: ITimerTime;
    status: ETimerStatus;
    constructor();
    addTime: (unit: ETimerTime, number: number) => void;
    subtractTime: (unit: ETimerTime, number: number) => void;
    setTime: (unit: ETimerTime, number: number) => void;
    setStatus: (status: ETimerStatus) => void;
}
export declare const timerDomain: TimerDomain;
