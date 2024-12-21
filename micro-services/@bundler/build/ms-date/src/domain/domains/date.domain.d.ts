import { DateRepository } from "../../data/repositories";
import type { DateDomainContract } from "../contracts";
import type { IFormatOptions, TLocalesArgument } from "../models";
export declare class DateDomain implements DateDomainContract {
    private readonly dateRepository;
    constructor(dateRepository?: DateRepository);
    getDate(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getDateWithTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
    getTime(value?: string, locales?: TLocalesArgument, options?: IFormatOptions): string;
}
