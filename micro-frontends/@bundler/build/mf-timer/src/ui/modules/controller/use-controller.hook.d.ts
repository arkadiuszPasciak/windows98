export declare function useController(): {
    hours: number;
    minutes: number;
    seconds: number;
    increaseSeconds: () => void;
    decreaseSeconds: () => void;
    increaseMinutes: () => void;
    decreaseMinutes: () => void;
    increaseHours: () => void;
    decreaseHours: () => void;
    isDisabled: boolean;
};
