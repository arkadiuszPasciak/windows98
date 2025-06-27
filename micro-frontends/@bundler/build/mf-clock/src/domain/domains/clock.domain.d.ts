import { Maybe } from '@windows98/toolkit';
import { ClockDomainContract } from '../contracts';
export declare class ClockDomain implements ClockDomainContract {
    time: Maybe<string>;
    private dateDomain;
    constructor();
    updateTime(): void;
}
export declare const clockDomain: ClockDomain;
