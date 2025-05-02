import { default as BrowserEnvRepositoryContract } from '../../domain/contracts/repository.contract';
import { IBrowserNameRegex, TBrowserName } from '../../domain/models/browser.model';
export default class BrowserNameRepository implements BrowserEnvRepositoryContract<TBrowserName> {
    private readonly browserNames;
    constructor(browserNames?: Array<IBrowserNameRegex>);
    get(): TBrowserName | null;
}
