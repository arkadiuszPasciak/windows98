import { TimerControllerDomainContract, TimerPlayerDomainContract, TimerPresetsDomainContract } from '.';
import { ETimerStatus, ETimerTime, ITimerTime } from '../models';
export interface TimerDomainContract {
    controllerDomain: TimerControllerDomainContract;
    playerDomain: TimerPlayerDomainContract;
    presetsDomain: TimerPresetsDomainContract;
    time: ITimerTime;
    status: ETimerStatus;
    addTime(unit: ETimerTime, number: number): void;
    subtractTime(unit: ETimerTime, number: number): void;
    setTime(unit: ETimerTime, number: number): void;
    setStatus(status: ETimerStatus): void;
}
