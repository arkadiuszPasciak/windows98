import { ETimezone } from '../models';
export interface TimezoneRepositoryContract {
    get(): Array<ETimezone>;
}
