import { ShutdownDomainContract } from '../contracts';
import { EShutdownPresets } from '../models';
export declare class ShutdownDomain implements ShutdownDomainContract {
    private appController;
    preset: EShutdownPresets;
    constructor();
    changePreset(preset: EShutdownPresets): void;
    restartApplication(): void;
    shutdownApplication(): void;
}
export declare const shutdownDomain: ShutdownDomain;
