import { TimezoneRepositoryContract } from '../../domain/contracts';
import { ETimezone } from '../../domain/models';
export declare class TimezoneRepository implements TimezoneRepositoryContract {
    get(): Array<ETimezone>;
}
