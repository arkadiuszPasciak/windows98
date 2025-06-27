import { EShutdownPresets } from '../../../domain/models';
export declare const usePresets: () => {
    presets: {
        preset: EShutdownPresets;
        content: string;
        id: string;
    }[];
    setPreset: (preset: EShutdownPresets) => void;
    selectedPreset: EShutdownPresets;
};
