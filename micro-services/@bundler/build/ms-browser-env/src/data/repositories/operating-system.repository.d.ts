import type BrowserEnvRepositoryContract from "../../domain/contracts/repository.contract";
import type { IOperatingSystemRegex, TOperatingSystemAll } from "../../domain/models/operating.model";
export default class OperatingSystemRepository implements BrowserEnvRepositoryContract<TOperatingSystemAll> {
    private readonly operatingSystems;
    constructor(operatingSystems?: Array<IOperatingSystemRegex>);
    get(): TOperatingSystemAll | null;
}
