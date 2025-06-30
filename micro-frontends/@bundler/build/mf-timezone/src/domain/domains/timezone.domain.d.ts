import { Maybe } from '@windows98/toolkit';
import { TimezoneDomainContract } from '../contracts';
import { ITimezoneValuePairs } from '../models';
export declare class TimezoneDomain implements TimezoneDomainContract {
    private msDate;
    timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>>;
    constructor();
    generateTimezones(): void;
    private createI18nKey;
    private mapTimezonesToValuePairs;
}
export declare const timezoneDomain: TimezoneDomain;
