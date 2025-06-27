import { TimerPresetsDomainContract, TimerDomainContract } from '../contracts';
import { ETimerPresets } from '../models';
export declare class TimerPresetsDomain implements TimerPresetsDomainContract {
    preset: ETimerPresets;
    private timerDomain;
    private presetTimes;
    constructor(timerDomain: TimerDomainContract);
    setPreset: (preset: ETimerPresets) => void;
    private setMinutes;
    private setPresetStatus;
    private resetSecondsAndHours;
}
