import { Maybe } from '@windows98/toolkit';
import { ITimezoneValuePairs } from '../models';
export interface TimezoneDomainContract {
    timezonesValuePairs: Maybe<Array<ITimezoneValuePairs>>;
    generateTimezones(): void;
}
