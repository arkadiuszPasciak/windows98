import { EShutdownPresets } from '../models';
export interface ShutdownDomainContract {
    preset: EShutdownPresets;
    changePreset(preset: EShutdownPresets): void;
    restartApplication(): void;
    shutdownApplication(): void;
}
