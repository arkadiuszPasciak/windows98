import type { TimezoneRepositoryContract } from "../../domain/contracts";
import type { ETimezone } from "../../domain/models";
export declare class TimezoneRepository implements TimezoneRepositoryContract {
    get(): Array<ETimezone>;
}
