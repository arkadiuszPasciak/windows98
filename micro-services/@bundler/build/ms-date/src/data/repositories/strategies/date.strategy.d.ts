import type { DateStrategyContract } from "../../../domain/contracts";
export declare class DateStrategy implements DateStrategyContract {
    createDate(value?: string): Date;
    private isValidDate;
}
