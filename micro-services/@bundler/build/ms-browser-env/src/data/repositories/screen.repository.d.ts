import { default as BrowserEnvRepositoryContract } from '../../domain/contracts/repository.contract';
import { IScreenInformation } from '../../domain/models/screen.model';
export default class ScreenRepository implements BrowserEnvRepositoryContract<IScreenInformation> {
    get(): {
        colorDepth: number;
        height: number;
        width: number;
    } | null;
}
