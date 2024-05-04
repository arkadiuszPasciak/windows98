import type { IBrowserNameRegex, TBrowserName } from "../../domain/models/browser.model";
import type BrowserEnvRepositoryContract from "../../domain/contracts/repository.contract";
export default class BrowserNameRepository implements BrowserEnvRepositoryContract<TBrowserName> {
    private readonly browserNames;
    constructor(browserNames?: Array<IBrowserNameRegex>);
    get(): TBrowserName | null;
}
