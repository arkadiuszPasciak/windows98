import { EMonth } from '../models';
export interface MonthRepositoryContract {
    get(value?: string): EMonth;
}
