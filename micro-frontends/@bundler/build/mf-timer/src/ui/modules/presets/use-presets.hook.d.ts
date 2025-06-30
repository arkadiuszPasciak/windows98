import { ETimerPresets } from '../../../domain/models';
export declare const usePresets: () => {
    disabled: boolean;
    presets: {
        preset: ETimerPresets;
        content: string;
        id: string;
    }[];
    setPreset: (preset: ETimerPresets) => void;
    selectedPreset: ETimerPresets;
    title: string;
};
